const mongoose = require('../config/connection')

const Userschema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('user',Userschema)