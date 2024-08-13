// var fs = require('fs');
// var os = require('os');

// var user =os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt' , 'Hii' +user.username + '!\n ' ,()=>{
//     console.log('file is created');
// });

// console.log(os);

//IMPORT FILE

// const notes = require('./notes.js')



// var age=notes.age;
// console.log(age);

// var add=notes.addNumber(age+100 , 100);
// console.log(add);

var _ =require('lodash');

var data =['person' , 'person' ,1,2,1,2,'name','age','2'];
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString('Ayush'));
console.log(_.isString(3));