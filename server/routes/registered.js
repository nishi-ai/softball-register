const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('In another middlware');
    res.sendFile(path.join(__dirname, '../', '../', 'web', 'public', 'index.html'));
});

module.exports = router;