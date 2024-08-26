const jwt =require('jsonwebtoken');

const jwtAuthMiddleware =(req,res,next)=>{
      
     //first  check request headers has authorization or not
     const authorization =req.headers.authorization
     if(!authorization) return res.status(401).json({error:'Token not found'});
      
     //extract the jwt token from the request headers
     const token=req.headers.authorization.split(' ')[1];
     if(!token) return res.status(401).json({error : 'Unautorized'});

     try{
        //verify the JWT token
      const decoded=  jwt.verify(token,process.env.JWT_SECRET);
        
      //attach user information to the request object
      req.user =decoded
      next();

     }catch(err){
        console.error(err);
        res.status(401).json({error : 'Invalid Token'});
     }

}

//function to generate JWt token
const generateToken =(userData)=>{

 //Generate a new JWT token using user Data
 return jwt.sign(userData, process.env.JWT_SECRET , {expiresIn:300000});

}



module.exports ={jwtAuthMiddleware , generateToken};