const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/users',async(req,res)=>{
    try{
        const user = await User.find()
        res.json(user)
    }catch(err){
        res.send('Error: '+err)
    }
})

router.post('/users',async(req,res)=>{
    const user = new User({
        name: req.body.name,
        emailId: req.body.emailId,
        password: req.body.password
    })
    try{
        const u1 = await user.save()
        res.json(u1)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.get('/users/:emailId',async(req,res)=>{
    try{
        const user = await User.findOne({emailId:req.params.emailId})
        res.json(user)
    }catch(err){
        res.send("Error: "+err)
    }
})

module.exports = router