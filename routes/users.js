const express  = require('express');
const passport = require('passport');
const User     = require('../models/User');
const router   = express.Router();

/**
 * Reject requests asking for all users
 */
router.get('/', (req, res) =>{
    if ( req.isAuthenticated() ) {
        res.redirect(`/users/${req.user.twitter.id}`);
    }
    res.redirect('/');
});

/* GET a user's image wall. */
router.get('/:id', (req, res, next) =>{
    User.findOne({
        'twitter.id': req.params.id
    }, (err, user) =>{
        if ( err ) {
            next(err)
        } else if ( !user ) {
            next();
        } else {
            res.render('profile', { user });
        }
    });
});

module.exports = router;
