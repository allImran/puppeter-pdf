const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();
const { marked } = require('marked');
const PORT = 3000;

app.use(express.json()); // To parse JSON requests
app.use(cors());

app.post('/generate-pdf', async (req, res) => {
  const { htmlContent } = req.body;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const styledHtml = `
        <html>
            <head>
                <style>
                    /* General Styles */
                    .image_resized {
                      width: 100%;
                      display: block;
                      box-sizing: border-box;
                  }
                  .image {
                      position: relative;
                      z-index: 1;
                      clear: both;
                      text-align: center;
                      min-width: 50px;
                      width: 100%;
                  }
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        margin: 0;
                        padding: 20px;
                    }
                    h1, h2, h3, h4, h5, h6 {
                        margin: 20px 0 10px;
                        font-weight: bold;
                    }
                    h1 { font-size: 2.5em; }
                    h2 { font-size: 2em; }
                    h3 { font-size: 1.75em; }
                    h4 { font-size: 1.5em; }
                    h5 { font-size: 1.25em; }
                    h6 { font-size: 1em; }
                    p {
                        margin: 10px 0;
                    }
                    a {
                        color: #007BFF;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    ul, ol {
                        margin: 10px 0 10px 20px;
                        padding: 0;
                    }
                    li {
                        margin-bottom: 5px;
                    }
                    blockquote {
                        margin: 10px 0;
                        padding: 10px 20px;
                        background-color: #f9f9f9;
                        border-left: 4px solid #ccc;
                        font-style: italic;
                    }
                    pre {
                        background-color: #f4f4f4;
                        padding: 10px;
                        overflow-x: auto;
                        font-family: monospace;
                        border: 1px solid #ddd;
                    }
                    code {
                        background-color: #f4f4f4;
                        padding: 2px 4px;
                        font-family: monospace;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f4f4f4;
                        font-weight: bold;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                        display: block;
                        margin: 10px 0;
                    }
                    .image img {
                        display: block;
                        margin: 0 auto;
                        min-width: 100%;
                        height: auto;
                        vertical-align: middle;
                    }
                    figure {
                        margin: 10px 0;
                    }
                    figcaption {
                        text-align: center;
                        font-style: italic;
                        font-size: 0.9em;
                    }
                    hr {
                        border: 0;
                        border-top: 1px solid #ddd;
                        margin: 20px 0;
                    }
                    /* Forms */
                    input, textarea, select, button {
                        font-family: inherit;
                        font-size: inherit;
                        margin: 5px 0;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        width: 100%;
                    }
                    button {
                        background-color: #007BFF;
                        color: #fff;
                        border: none;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: #0056b3;
                    }
                    /* Headers and Footers */
                    header, footer {
                        background-color: #f4f4f4;
                        padding: 20px;
                        text-align: center;
                    }
                    footer {
                        font-size: 0.8em;
                        color: #666;
                    }
                    .vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}
                    
                </style>
            </head>
            <body>
              ${htmlContent}
            </body>
        </html>`;

    await page.setContent(styledHtml, {
      waitUntil: 'networkidle0',
    });

    await page.pdf({
      // format: 'A4',
      path: './pdfs/hn.pdf',
      printBackground: true, // Ensures styles are rendered
      width: 1520
    });

    await browser.close();
    const filePath = path.join(__dirname, 'pdfs/hn.pdf');
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=generated.pdf',
    });

    // res.send(pdfBuffer);
    await new Promise((resolve, reject) => {
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
    //fs.unlinkSync(filePath);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('An error occurred:', err);
      } else {
        console.log('File deleted successfully!');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to generate PDF');
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
