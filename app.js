const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Recipes API!');
});

// Start server
app.listen('5000','127.0.0.1',()=>{
  console.log('Server is running at http://127.0.0.1:5000');
  console.log('press ctrl+c to stop the server');
})
