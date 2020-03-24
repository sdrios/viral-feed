const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const authRoutes = require('./routes/auth-routes');
 
require('dotenv').config();

const app = express();
const PORT = 8080;

app.use(session({
    secret: iliketurtles,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//app.use('/auth', authRoutes); //include auth routes

app.use(express.static(path.join(__dirname,'build')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'));
})


app.listen(PORT, ()=>{

    console.log('server listening on port:' + PORT);
})