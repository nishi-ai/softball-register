const path = require('path')

const express = require('express');

// const rootDir = require('../util.path')

const router = express.Router();

// router.use === routes (all http methods) handler
router.use((req, res, next) => {
    next(); // Allows the request to continue to the next middleware (app.use) in line
});
  
// /admin/registration => GET
router.get('/registration', function (req, res) {
    console.log("sending Hello")
    res.sendFile(path.join(__dirname, '../', '../', 'web', 'public', 'index.html'));
});

// /admin/registration => POST
router.post('/registration', (req, res, next) => {
    console.log(req.body);
    // res.redirect('/')
})

module.exports = router;