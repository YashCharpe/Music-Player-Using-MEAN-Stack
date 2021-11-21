const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Music = require('../models/music')
const Playlist = require('../models/playlist')

router.get('/users', async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (err) {
        res.send('Error: ' + err)
    }
})

router.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        emailId: req.body.emailId,
        password: req.body.password
    })
    try {
        const u1 = await user.save()
        res.json(u1)
    } catch (err) {
        res.send("Error: " + err)
    }
})

router.get('/users/:emailId', async (req, res) => {
    try {
        const user = await User.findOne({ emailId: req.params.emailId })
        res.json(user)
    } catch (err) {
        res.send("Error: " + err)
    }
})
router.get('/users/true/true', async (req, res) => {
    try {
        const user = await User.find({ active_status: true })
        res.json(user)
    } catch (err) {
        res.send("Error: " + err)
    }
})
router.patch('/users/:emailId',async(req,res)=>{
    try{
        const user = await User.updateOne({emailId:req.params.emailId},{$set:{active_status:"true"}})
        res.json(user)
    }catch(err){
        res.send("Error: "+err)
    }
})

// router.patch('/users/:emailId',async(req,res)=>{
//     try{
//         const user = await User.updateOne({emailId:req.params.emailId},{$set:{active_status:"false"}})
//         res.json(user)
//     }catch(err){
//         res.send("Error: "+err)
//     }
// })

router.get('/musics', async (req, res) => {
    try {
        const music = await Music.find()
        res.json(music)

    } catch (err) {
        res.send("Error: " + err)
    }
})

router.get('/musics/:musicId', async (req, res) => {
    try {
        const music = await Music.find({ musicId: req.params.musicId })
        res.json(music)
    } catch (err) {
        res.send("Error: " + err)
    }
})

router.post('/musics', async (req, res) => {
    const music = new Music({
        musicId: req.body.musicId,
        musicName: req.body.musicName,
        musicPath: req.body.musicPath,
        thumbnailPath: req.body.thumbnailPath,
        artistName: req.body.artistName
    })
    try {
        const m1 = await music.save()
        res.json(m1)
    } catch (err) {
        res.send("Error: " + err)
    }
})

router.get('/users/:emailId/playlist', async (req, res) => {
    try {
        const playlist = await Playlist.find({ emailId: req.params.emailId })
        res.json(playlist)
    } catch (err) {
        res.send("Error: " + err)
    }
})

router.post('/users/:emailId/playlist', async (req, res) => {
    const song = new Playlist({
        emailId: req.params.emailId,
        songId: req.body.songId
    })

    try {
        const song1 = await song.save()
        res.json(song1)
    } catch (err) {
        res.send("Error: " + err)
    }
})

router.delete('/users/:emailId/playlist/:songId',async(req,res)=>{
    try{
        const song = await Playlist.deleteOne({songId:req.params.songId})
        res.json(song)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.get('/users/:emailId/playlist/:songId', async (req, res) => {
    try {

        const playlist = await Playlist.findOne({ emailId: req.params.emailId, songId: req.params.songId })
        res.json(playlist)

    } catch (err) {
        res.send("Error: " + err)
    }
})

router.post('/users/:emailId/plalist/:songId', async (req, res) => {
    try{

    }catch(err){
        res.send("Error: "+err)
    }
})


module.exports = router