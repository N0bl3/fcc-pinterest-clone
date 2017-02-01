const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router  = express.Router();

/* GET users listing. */
router.get('/:id', (req, res, next) =>{
    User.findOne({
        'twitter.id': req.params.id
    }, (err, user) =>{
        if ( err ) {
            throw err;
        }
        if ( !user ) {
            res.sendStatus(404);
        }
        res.render('profile', { user });
    });
});

module.exports = router;
