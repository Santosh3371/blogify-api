const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A distinct username is required'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'An email address is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'A secure password is required']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, { 
  timestamps: true // Automatically sets createdAt and updatedAt fields
});

module.exports = mongoose.model('User', userSchema);