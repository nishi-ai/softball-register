const express = require('express');

const router = express.Router();

// router.use === routes (all http methods) handler
router.use((req, res, next) => {
    next(); // Allows the request to continue to the next middleware (app.use) in line
});
  
// /admin/registration => GET
router.get('/registration', function (req, res) {
    console.log("GET: sending Hello")
});

// /admin/registration => POST
router.post('/registration', (req, res, next) => {
    console.log("POST:")
    console.log(req.body);
    res.status(200);
    // need to return something json because frontend expects to receive `json.
    res.send({});
})

module.exports = router;