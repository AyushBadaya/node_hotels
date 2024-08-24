const express = require('express')
const app = express();

const db =require('./db');

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// const Person=require('./models/pperson');
// const MenuItem=require('./models/MenuItems');

app.get('/', function (req, res) {
  res.send('Welcome to my hotel ! , How I can help you ? ,We have list of menu')
});


 
//IMPORT THE ROUTERS FILE
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');

//USE the routers
app.use('/person',personRoutes);
app.use('/Menu',menuRoutes);



app.listen(PORT, ()=>{
    console.log('listening on port 3000');
});