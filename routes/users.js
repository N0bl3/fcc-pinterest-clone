const express = require('express');
const passport = require('passport');
const router  = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next){
    if ( req.isAuthenticated() && req.user.id === req.params.id ) {
        res.send(`Private profile`)
    } else {
        res.send(`Public profile`);
    }
});

module.exports = router;
