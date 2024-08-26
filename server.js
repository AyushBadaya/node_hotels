const express = require('express')
const app = express();

const db =require('./db');

require('dotenv').config();


const passport =require('./auth');


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

//Middleware Functions
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
  next(); // move on to next phase
}

app.use(logRequest);



app.use(passport.initialize());
const localAuthMiddleware =passport.authenticate('local',{session:false})

app.get('/',function (req, res) {
  res.send('Welcome to my hotel ! , How I can help you ? ,We have list of menu')
});


 
//IMPORT THE ROUTERS FILE
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');

//USE the routers
app.use('/person',personRoutes);
app.use('/Menu', menuRoutes);



app.listen(PORT, ()=>{
    console.log('listening on port 3000');
});