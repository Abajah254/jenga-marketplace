// Import required packages
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json()); // Parse JSON data from requests

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Jenga Backend is working!' });
});

// Database connection test
const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connection established successfully.');
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Jenga Backend running on http://localhost:${PORT}`);
      console.log(`📊 Test it by visiting: http://localhost:${PORT}/api/test`);
    });
    
  } catch (error) {
    console.error('❌ Unable to connect to PostgreSQL:', error);
  }
};

// Start the server
startServer();