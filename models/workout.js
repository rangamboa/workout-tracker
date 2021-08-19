const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: [{
    name: {
      type: String,
      trim: true,
      required: 'Enter a name of the workout.'
    },
    type: {
      type: String,
      trim: true,
      required: 'Enter the workout type.'
    },
    weight: {
      type: Number,
      default: 0,
      required: 'Enter the weight.'
    },
    sets: {
      type: Number,
      default: 0,
      required: 'Enter the number of sets.'
    },
    reps: {
      type: Number,
      default: 0,
      required: 'Enter the number of reps.'
    },
    distance: {
      type: Number,
      default: 0,
      required: 'Enter the distance.'
    },
    duration: {
      type: Number,
      default: 0,
      required: 'Enter the duration of the workout.'
    }
  }]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;