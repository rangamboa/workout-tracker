// Declare required packages.
const db = require('../models');
const router = require('express').Router();

// Back-end routes.

// Retrieve workouts.
router.get('/api/workouts', (req, res) => {

    db.Workout.find({}).then(dbWorkout => {

        // console.log(dbWorkout);

        // Loop through workouts.
        dbWorkout.forEach(workout => {
            let total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            // Add individual duration to total duration.
            workout.totalDuration = total;

        });

        // Display workouts.
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// Get all workouts in a range to display on dashboard.
router.get("/api/workouts/range", (req, res) => {

    // Finds all if nothing specified in curly brackets {}.
    db.Workout.find({}).then(dbWorkout => {

        // console.log('Test '+ dbWorkout);
        
        // Display workouts.
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

});

// Create a workout.
router.post('/api/workouts', ({body}, res) => {

    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });

});

// Add a workout.
router.put('/api/workouts/:id', (req, res) => {

    db.Workout.findOneAndUpdate(
        {
            _id: req.params.id // set ID of workout
        },
        {
            $inc: { totalDuration: req.body.duration }, // duration
            $push: { exercises: req.body } // all other data into array
        },
        {
            new: true
        }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

});

module.exports = router;