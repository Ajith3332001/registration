const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '../.env' });

// Debug: Print out the MongoDB URL to verify it's loaded correctly
console.log('MongoDB URL:', process.env.MONGODB_URL);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('DATABASE CONNECTED');
  })
  .catch(e => {
    console.error('MongoDB connection error:', e);
  });

