require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const mongoUrl = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(mongoUrl).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const FashionRouter = require('./router/FashionRoutes');
app.use('/fashion', FashionRouter);
const FoodRouter = require('./router/FoodRoutes');
app.use('/food', FoodRouter);
const ReviewRouter = require('./router/ReviewRoutes');
app.use('/review', ReviewRouter);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// Handle 404
app.use((req, res) => {
    res.status(404).send("Page Not Found!");
});

module.exports = app;
