const express=require('express');
const router =express.Router();

const Person=require('./../models/pperson');

router.post('/', async (req,res)=>{
    try{
   const data=req.body  
    const newPerson =new Person(data);
    const response =await newPerson.save();
    console.log('data saved successfully');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
      }
  })

  router.get('/' , async(req,res)=>{
    try{
         const data = await Person.find();
         console.log('data fetched successfully');
         res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
  })

  router.get('/:workType',async(req,res)=>{
    const workType=req.params.workType;
    try{
      if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response=await Person.find({work:workType});
               console.log('response fatched');
               res.status(200).json(response);
      }
      else{
              res.status(404).json({erroe : 'Invalid work type'});
      }
    }
      catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
  
       }
    })

    router.put('/:id',async (req,res)=>{
      try{
           const personId =req.params.id;//extract the id from the URL prameter
           const updatePersonData =req.body;//updated data for the person

           const response=await Person.findByIdAndUpdate(personId ,updatePersonData,{
            new:true, //return the updated document
            runValidators:true, //run mongoose validation
           })

           if(!response){
            return res.status(404).json({error:'Person not found'});
           }

           console.log('data updated successsfully');
           res.status(200).json(response);
      }
      catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Sever Error'});

           }
    })

    router.delete('/:id',async (req,res)=>{
      try{
        const personId =req.params.id;
        const response=await Person.findByIdAndDelete(personId);

        if(!response){
          return res.status(404).json({error:'Person not found'});
         }

         console.log('data deleted successsfully');
           res.status(200).json({message: 'person deleted successsfully'} );
      }
      catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Sever Error'});

      }
    })

    module.exports=router;