// Declare and set up required packages.
const express = require('express');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Set up front- and back-end routes.
app.use(require('./routes/api.js'));
app.use(require('./routes/front.js'));

app.listen(3001, () => {
  console.log("\n\n\n ----- Now listening on port 3001. -----");
});
