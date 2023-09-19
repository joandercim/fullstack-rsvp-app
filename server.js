const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

connectDB();

dotenv.config();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

const peopleRouter = require('./routes/people');
// Add middleware
app.use('/api/people', peopleRouter);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

