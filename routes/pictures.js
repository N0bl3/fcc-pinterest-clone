const express  = require('express');
const passport = require('passport');
const router   = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next){
    if ( picture.hidden ) {
        res.send(`Hidden Picture`);
    }
    res.send(`Public picture`);
});

module.exports = router;
