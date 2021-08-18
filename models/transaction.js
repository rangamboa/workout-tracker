const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Enter a name of the workout.'
  },
  type: {
    type: Number,
    required: 'Enter the workout type.'
  },
  weight: {
    type: Number,
    required: 'Enter the weight.'
  },
  sets: {
    type: Number,
    required: 'Enter the number of sets.'
  },
  reps: {
    type: Number,
    required: 'Enter the number of reps.'
  },
  duration: {
    type: Number,
    required: 'Enter the duration of the workout.'
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
