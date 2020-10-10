const mongoose = require('mongoose')

const UserSchem = new mongoose.Schema({
    name:{
       type : String,
       required:true
    },
    email:{
        type : String,
        required:true
     },
     password:{
        type : String,
        required:true
     } 
})

mongoose.model('User', UserSchem)