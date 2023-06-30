const mongoose = require('../config/connection')

const Courseschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    orgname:{
        type:String,
        required:true
    },
    desc1:{
        type:String,
        required:true
    },
    desc2:{
        type:String,
        required:true
    },
    desc3:{
        type:String,
        required:true
    },
    desc4:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }})

module.exports = mongoose.model('course',Courseschema)