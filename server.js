// Declare and set up required packages.
const express = require('express');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const logger = require('morgan');
const PORT = process.env.PORT || 3000

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
app.use(require('./routes/api.js')); // back
app.use(require('./routes/front.js')); // front
console.log(process.env.MONGODB_URI);
app.listen(PORT, () => {
  console.log(`\n\n\n----- Now listening on ${PORT}. -----\n`);
});
