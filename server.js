const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.static('public'));

app.post('/generate-screenshot', async (req, res) => {
  const { htmlContent } = req.body;

  if (!htmlContent) {
    return res.status(400).json({ error: "htmlContent is required" });
  }

  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();

    // Good viewport for charts, grid layout, CKEditor images, etc.
    await page.setViewport({
      width: 1600,
      height: 1000,
      deviceScaleFactor: 2
    });

     const styledHtml = `
        <html>
            <head>
                <link rel="stylesheet" href="http://localhost:${PORT}/css/app.css">
            </head>
            <body>
              ${htmlContent}
            </body>
        </html>`;

    await page.setContent(styledHtml, {
      waitUntil: "networkidle0"
    });

    // Wait for charts / grid / CKEditor images to fully render
    //await page.waitforti;

    // const screenshotBuffer = await page.screenshot({
    //   type: "png",
    //   fullPage: true
    // });
    await page.screenshot({path: 'screenshot.png', fullPage: true});

    await browser.close();

    // Return the PNG file to the client
    // res.setHeader("Content-Type", "image/png");
    // res.send(screenshotBuffer);

  } catch (error) {
    console.error("Screenshot generation error:", error);
    res.status(500).json({ error: "Failed to generate screenshot" });
  }
});

app.listen(PORT, () =>
  console.log(`Screenshot server running on http://localhost:${PORT}`)
);
