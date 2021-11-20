const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    musicId:{
        type:String,
        required:true
    },
    musicName:{
        type:String,
        required:true
    },
    musicPath:{
        type:String,
        required:true
    },
    thumbnailPath:{
        type:String,
        required:true
    },
    artistName:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("MusicSchema",musicSchema)