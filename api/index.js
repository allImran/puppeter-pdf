const express = require('express');
// const puppeteer = require('puppeteer'); // Removed to avoid production issues
const cors = require('cors');
const { PDFDocument } = require('pdf-lib');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.static('public'));

/**
 * Generates a screenshot for a single HTML content string.
 * @param {puppeteer.Page} page - The puppeteer page instance.
 * @param {string} htmlContent - The HTML content to render.
 * @returns {Promise<Buffer>} - The screenshot buffer.
 */
async function generateScreenshot(page, htmlContent) {
    const styledHtml = `
        <html>
            <head>
                <link rel="stylesheet" href="http://localhost:${PORT}/css/app.css">
            </head>
            <body>
              <div style="width: 1380px;">
                ${htmlContent}
              </div>
            </body>
        </html>`;

    await page.setContent(styledHtml, {
        waitUntil: "networkidle0"
    });

    // Calculate the full height of the content
    // We target the wrapper div to get the exact content height
    const bodyHeight = await page.evaluate(() => {
        const wrapper = document.querySelector('body > div');
        if (wrapper) {
            return wrapper.offsetHeight;
        }
        return document.body.scrollHeight;
    });

    // Resize viewport to full height to avoid scrolling issues
    // User requested PDF width 1380, so we set viewport width to 1380
    await page.setViewport({
        width: 1380,
        height: bodyHeight, // Removed buffer to avoid white gap
        deviceScaleFactor: 2
    });

    return await page.screenshot({
        type: "png",
        fullPage: true // We resized viewport, but fullPage ensures we get everything if there's any overflow
    });
}

/**
 * Creates a PDF from an array of image buffers.
 * @param {Buffer[]} imageBuffers - Array of image buffers.
 * @returns {Promise<Uint8Array>} - The generated PDF bytes.
 */
async function createPdfFromImages(imageBuffers) {
    const pdfDoc = await PDFDocument.create();

    for (const imageBuffer of imageBuffers) {
        const image = await pdfDoc.embedPng(imageBuffer);
        const { width, height } = image.scale(0.5); // Scale down because of deviceScaleFactor: 2

        // User requested PDF width 1380. 
        // Our image is 1380 * 2 = 2760px wide.
        // Scaling by 0.5 gives 1380 width in PDF points.
        
        const page = pdfDoc.addPage([width, height]);
        page.drawImage(image, {
            x: 0,
            y: 0,
            width: width,
            height: height,
        });
    }

    return await pdfDoc.save();
}
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/generate-pdf', async (req, res) => {
    const { htmlContent } = req.body;

    if (!htmlContent || !Array.isArray(htmlContent) || htmlContent.length === 0) {
        return res.status(400).json({ error: "htmlContent must be a non-empty array" });
    }

    let browser;
    try {
        if (process.env.VERCEL) {
            const chromium = require('@sparticuz/chromium');
            const puppeteerCore = require('puppeteer-core');
            browser = await puppeteerCore.launch({
                args: chromium.args,
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: chromium.headless,
            });
        } else {
            const puppeteer = require('puppeteer');
            browser = await puppeteer.launch({
                headless: "new",
                args: ["--no-sandbox", "--disable-setuid-sandbox"]
            });
        }

        const page = await browser.newPage();
        const screenshots = [];

        // Process sequentially to ensure order and stability
        for (const html of htmlContent) {
            const screenshot = await generateScreenshot(page, html);
            screenshots.push(screenshot);
        }

        const pdfBytes = await createPdfFromImages(screenshots);

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=generated.pdf");
        res.send(Buffer.from(pdfBytes));

    } catch (error) {
        console.error("PDF generation error:", error);
        res.status(500).json({ error: "Failed to generate PDF" });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
});

app.listen(PORT, () =>
    console.log(`PDF server running on http://localhost:${PORT}`)
);

module.exports = app;
