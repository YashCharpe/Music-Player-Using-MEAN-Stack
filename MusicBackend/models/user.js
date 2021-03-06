const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    emailId:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    active_status:{
        type: Boolean,
        required:true,
        default:false 
    }
})
module.exports = mongoose.model('User',userSchema)