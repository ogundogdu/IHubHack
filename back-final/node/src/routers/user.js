const User = require('../model/user');
const express = require('express');

const router = new express.Router();

router.get('/users', async (req, res) =>{
    try{
        const users = await User.find({});
        res.status(200).send(users);
    }
    catch(err){
        res.status(500).send(err)
    }

});

router.post('/users', async (req, res) =>{
    try{
        const user = User(req.body);
        console.log(user);
        await user.save();
        res.status(200).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;