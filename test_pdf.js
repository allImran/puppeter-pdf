const fs = require('fs');

async function testPdfGeneration() {
    const htmlContent = [
        '<div style="height: 500px; background: red;"><h1>Page 1</h1></div>',
        '<div style="height: 800px; background: blue;"><h1>Page 2</h1></div>',
        '<div style="height: 300px; background: green;"><h1>Page 3</h1></div>'
    ];

    try {
        const response = await fetch('http://localhost:3000/generate-pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ htmlContent })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const buffer = await response.arrayBuffer();
        fs.writeFileSync('test_output.pdf', Buffer.from(buffer));
        console.log('PDF generated successfully: test_output.pdf');
    } catch (error) {
        console.error('Error:', error);
    }
}

testPdfGeneration();
