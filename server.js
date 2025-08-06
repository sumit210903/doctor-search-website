// Import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db_connect'); // MongoDB connection

// Create Express app
const app = express();

// Set PORT (Render sets PORT env variable)
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend (GitHub Pages or any domain)
app.use(cors({
  origin: ['https://sumit210903.github.io'], // <-- change/add more if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Parse incoming JSON requests
app.use(express.json());

// Serve static files if needed
app.use(express.static('public'));

// Test route
app.get('/', (req, res) => {
  res.send('CareRadar Backend is running ✅');
});

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/contact', require('./routes/contact'));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
