const express = require('express');
const app = express();
const db = require ('./db')
app.use(express.json())
require('dotenv').config();
const auth = require ('./routes/auth');
const note = require ('./routes/note');


app.use('/api/auth', auth);
app.use('/api/note', note);


app.get('*',(req, res)=>{
    res.send('Page Not Found');
})













app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})