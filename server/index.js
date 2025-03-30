require('dotenv').config(); // Load environment variables at the top
const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env if available

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI; // Use the .env variable
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define Mongoose Schema
const schemeSchema = new mongoose.Schema({
    state: String,
    cropProduction: [{ id: Number, name: String, description: String }],
    finance: [{ id: Number, name: String, description: String }],
});

const Scheme = mongoose.model('Scheme', schemeSchema);

// API Route to Fetch Schemes Based on State and Category
app.get("/schemes/:state/:category", async (req, res) => {
    try {
        const { state, category } = req.params;

        // Fetch only the required category field
        const scheme = await Scheme.findOne({ state });

        if (!scheme) {
            return res.status(404).json({ message: "State not found" });
        }

        const schemes = category === "cropProduction" ? scheme.cropProduction : scheme.finance;

        res.json(schemes || []);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Function to Run Python Scraper
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

// Endpoint to Fetch Subsidy Data (Triggers Python Scraper)
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

// Fallback Route
app.get('/', (req, res) => {
    res.json({ message: 'Farmer Subsidy Backend is running' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
