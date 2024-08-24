const mongoose =require('mongoose');

require('dotenv').config();

//Define the MOngoDB connection URL

//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL;

//Replace hotels with your database name

//set up mongoDB connections
 mongoose.connect(mongoURL);

 


//get the default connection
//mongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;

//define event listner
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});



db.on('error',(err)=>{
    console.log(' MongoDB connection error:',err);
});

db.on('disconnected',()=>{
    console.log('Disconnected to MongoDB server');
});

//export the database connection
module.exports=db;