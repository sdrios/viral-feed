const express = require('express');
const router = require('express').Router();
const axios = require('axios').default;
const models = require('../models');


//Twitter Auth
router.get('/twitter',passport.authenticate('twitter'));

//Twitter Callback
router.get('/twitter/callback', passport.authenticate('twitter'),{successRedirect:'/twitter/success',failureRedirect:'/twitter/failed'})


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

