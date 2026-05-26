const express = require('express');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());

// API Route Mount Point
app.use('/api/v1/auth', authRoutes);

// Base Health Check Route
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Blogify API! Server is healthy."
  });
});

module.exports = app;