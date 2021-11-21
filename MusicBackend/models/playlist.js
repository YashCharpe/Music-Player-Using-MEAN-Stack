const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    songId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('PlayList', playlistSchema)