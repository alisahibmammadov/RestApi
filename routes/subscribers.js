const express = require("express");
const router = express.Router();
const Subscriber = require('../models/subscriber');
const subscriber = require("../models/subscriber");
 
// Getting all
router.get("/",async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({msg:error.message})        
    }
});

// Gettin one
router.get("/:id", getSubscriber,async (req, res) => {
  
});
// Creating one
router.post("/",async (req, res) => {
    const subscriber = new Subscriber({
        name:req.body.name,
        subscribedToChanel:req.body.subscribedToChanel,
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
});
// updating one
router.patch("/", (req, res) => {});
// deleting one
router.patch("/:id", (req, res) => {

});


async function getSubscriber(req,res,next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber === null){
            return res.status(404).json({msg:"Cannot find subscriber"})
        }
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    res.subscriber = subscriber
    next()
}

module.exports = router;
