const TwitterStrategy = require('passport-twitter');
const User            = require('../models/User');

module.exports = function(passport){

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    passport.use(new TwitterStrategy({
            consumerKey   : process.env.TWITTER_CONSUMER_KEY,
            consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
            callbackURL   : `${process.env.APP_URL}auth/twitter/callback`
        },
        function(token, tokenSecret, profile, cb){
            User.findOrCreate({ 'twitter.id': profile.id }, { twitter: profile }, function(err, user){
                return cb(err, user);
            });
        }
    ));
};

