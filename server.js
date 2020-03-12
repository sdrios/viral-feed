const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.port || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/auth', authRoutes); //set up routes

app.use(express.static(path.join(__dirname,'build')));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'));
})


app.listen(PORT, ()=>{

    console.log('server listening on port:' + PORT);
})