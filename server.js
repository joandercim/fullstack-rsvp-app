const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

const peopleRouter = require('./routes/people');
// Add middleware
app.use('/api/people', peopleRouter);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
