// Dependencies
const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/index.html'));
});

// This has to be on the top than the other routers
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/notes.html'));
});


// If no matching route is found default to home page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/index.html'));
});


module.exports = router;