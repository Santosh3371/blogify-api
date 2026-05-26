const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Existing registration route
router.post('/register', authController.registerUser);

// LU 4.6: Add the login POST route
router.post('/login', authController.loginUser);

module.exports = router;