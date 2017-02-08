const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title      : 'Thinterest',
        description: 'Pinterest clone',
        user       : req.user
    });
});

module.exports = router;
