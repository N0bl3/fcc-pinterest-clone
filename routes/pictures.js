const express  = require('express');
const passport = require('passport');
const router   = express.Router();
const Picture = require('../models/Picture');

/* GET users listing. */
router.get('/:id', (req, res, next) =>{

    Picture.findById(req.params.id, (err, picture) =>{
        console.log("pic", req.params.id, picture);
        if ( err || !picture ) {
            next(err || null);
        } else {
            if ( picture.hidden ) {
                res.sendStatus(403);
            } else {
                res.sendStatus(200);
            }
        }
    });

});

module.exports = router;
