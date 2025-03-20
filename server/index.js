const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Function to run Python scraper
const runPythonScraper = () => {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['scraper.py']);
        
        pythonProcess.stderr.on('data', (data) => {
            console.error(`Python Error: ${data}`);
        });
        
        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`Python process exited with code ${code}`));
            } else {
                resolve();
            }
        });
    });
};

// Endpoint to fetch subsidy data
app.get('/api/subsidies', async (req, res) => {
    try {
        // Run the Python scraper
        await runPythonScraper();
                 
        // Read the generated JSON file
        const data = await fs.readFile(path.join(__dirname, 'schemes_data.json'), 'utf-8');
        const schemes = JSON.parse(data);
                  
        res.json(schemes);
    } catch (error) {
        console.error('Error fetching subsidy data:', error);
        res.status(500).json({ 
            error: 'Failed to fetch subsidy data', 
            details: error.message 
        });
    }
});

// Fallback route
app.get('/', (req, res) => {
    res.json({ message: 'Farmer Subsidy Backend is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});