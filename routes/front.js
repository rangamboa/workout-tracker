// Declare required packages.
const router = require('express').Router();
const path = require('path');

// Front-end routes.

// Go to homepage.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Add an exercise.
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Go to dashboard.
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;