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

//post route to add a person
// app.post('/person', async (req,res)=>{
//   try{

  
//   const data=req.body  //assuming the request body contains the person data
  
//   //cretae a new Person document using the mongoose model
//   const newPerson =new Person(data);
 

//   //save the new person to database
//   const response =await newPerson.save();
//   console.log('data saved successfully');
//   res.status(200).json(response);
// }
// catch(err){
//   console.log(err);
//   res.status(500).json({error:'Internal server error'});
// }

// })

//get method to get the person
// app.get('/person' , async(req,res)=>{
//   try{
//        const data = await Person.find();
//        console.log('data fetched successfully');
//        res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal server error'});
//   }
// })


// app.post('/Menu', async (req,res)=>{
//   try{
//   const data=req.body  
//   const newMenu =new MenuItem(data);
//   const response =await newMenu.save();
//   console.log('data saved successfully');
//   res.status(200).json(response);
// }
// catch(err){
//   console.log(err);
//   res.status(500).json({error:'Internal server error'});
//       }
// })

// app.get('/Menu' , async(req,res)=>{
//   try{
//        const data = await MenuItem.find();
//        console.log('data fetched successfully');
//        res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal server error'});
//   }
// })

// app.get('/person/:workType',async(req,res)=>{
//   const workType=req.params.workType;
//   try{
//     if(workType=='chef' || workType=='manager' || workType=='waiter'){
//           const response=await Person.find({work:workType});
//              console.log('response fatched');
//              res.status(200).json(response);
//     }
//     else{
//             res.status(404).json({erroe : 'Invalid work type'});
//     }
//   }
//     catch(err){
//       console.log(err);
//       res.status(500).json({error:'Internal Server Error'});

//     }
  

  
// })
 
//IMPORT THE ROUTERS FILE
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');

//USE the routers
app.use('/person',personRoutes);
app.use('/Menu',menuRoutes);



app.listen(PORT, ()=>{
    console.log('listening on port 3000');
});
