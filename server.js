const express = require('express');
const session = require('express-session');
const path = require('path');
const authRoutes = require('./routes/auth-routes');
 
require('dotenv').config();

const app = express();
const PORT = process.env.port || 8080;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/auth', authRoutes); //include auth routes

app.use(express.static(path.join(__dirname,'build')));

app.get('/', (req,res)=>{
    console.log('star route')
    res.sendFile(path.join(__dirname,'build/index.html'));
})


app.listen(PORT, ()=>{

    console.log('server listening on port:' + PORT);
})