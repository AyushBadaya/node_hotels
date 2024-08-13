const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World , I am Ayush Khandelwal here !')
})

app.get('/chicken',(req,res)=>{
    res.send('sure sir, i would love to serve chicken')
})

app.get('/idli',(req,res)=>{
   var customized_idli = {
    name:'Special idli',
    size:'10 cm diameter',
    is_sambhar:true,
    is_chutney:false,
   }
   res.send(customized_idli)
})

app.post('/person',(req,res)=>{
  console.log('suceessfully posted the person')
  res.send('done successfully')
})

app.listen(3000)

// app.listen(3000, ()=>{
//     console.log('listening on port 3000');
// })