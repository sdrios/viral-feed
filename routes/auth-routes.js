const router = require('express').Router();
const passport = require('passport');
const models = require('../models');
const TwitterStrategy = require('passport-twitter').Strategy;
require('dotenv').config();


//Twitter Auth
router.get('/twitter',passport.authenticate('twitter'));

//Twitter Callback
router.get('/twitter/callback',
 passport.authenticate('twitter',
 {successRedirect:'/twitter/success',failureRedirect:'/twitter/failed'}));


//Twitter Success
router.get('/twitter/success', (req,res)=>{
console.log('AUTH SUCCESS ROUTE')
res.send('AUTH SUCCESS')

})

//Twitter Failed
router.get('/twitter/failed', (req,res)=>{
console.log('AUTH FAILED ROUTE');
res.send('AUTH FAILED');
})



// Configure the Twitter strategy for use by Passport.

passport.use(new TwitterStrategy({
    consumerKey: process.env['TWITTER_CONSUMER_KEY'],
    consumerSecret: process.env['TWITTER_CONSUMER_SECRET'],
    callbackURL: '/auth/twitter/success'
},
    function (token, tokenSecret, profile, cb) {
        console.log("USER AUTHENTICATED!")
        console.log(profile);
        // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
        //     return cb(err, user);
        // });
    }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Twitter profile is serialized
// and deserialized.
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});


module.exports = router;