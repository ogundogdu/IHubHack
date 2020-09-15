const User = require('../model/user');
const express = require('express');
const Group = require('../model/group');
const {ObjectID} = require('mongodb');

const router = new express.Router();

router.get('/groups/:id', async (req, res) =>{
    const id = req.params.id;

    //console.log(id)
    if(!ObjectID.isValid(id)){
        return res.status(400).send({
            error: "bad request non valid Id"
        });
    }

    try{
        const group = await Group.findOne({_id: id});
        if(!group){
            return res.status(404).send();
        }
        res.status(200).send(group);
    }
    catch(err){
        res.status(500).send(err);
    }


});


router.post('/groups', async (req,res) =>{
    // const group = new Group({
    //     ...req.body,
    // })
    // console.log("group")
    try{
        const group = new Group(req.body);
        console.log(group)
        await group.save();
        res.status(200).send(group);
    }
    catch(err){
        res.status(500).send("err");
    }
});


router.patch('/groups/:id', async (req,res) =>{
    const id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(400).send({
            error: "bad request non valid Id"
        });
    }
    try{
        const oldGroup = await Group.findOne({_id: id});
        
        const newGroup = new Group({
            name: oldGroup.name,
            members: [...oldGroup.members]
        });
        newGroup.members.push(req.body)

        const group = await Group.findOneAndUpdate({_id: id}, {"members" : newGroup.members},
                                                {new: true, runValidators: true});
        if(!group){
            return res.status(404).send();
        }
        res.status(200).send(group);
    }
    catch(err){
        res.status(400).send(err);
    }



    // try{
    //     const group = new Group(req.body);
    //     console.log(group)
    //     await group.save();
    //     res.status(200).send(group);
    // }
    // catch(err){
    //     res.status(500).send("err");
    // }
});


module.exports = router;