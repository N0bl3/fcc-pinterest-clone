/**
 * Created by Admin on 01/02/2017.
 */
const express  = require('express');
const passport = require('passport');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
    res.render('login');
});

module.exports = router;
