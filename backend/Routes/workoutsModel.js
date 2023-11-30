const express = require('express');
const Workout = require('../models/Workout')
const router = express.Router();

//get all workouts
router.get('/',(req,res) => {
    res.json({mssg: "get all workouts"})
})

//get a single workout

router.get('/:id',(req,res)=>{
    res.json({mssg: "get a single workout"})
})


//post a new workout
router.post('/',async (req,res) => {
    const{title,loads,reps} = req.body;

    try{
        const workout = await Workout.create({title,loads,reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({mssg: "post a new workout"})
})

//delete a workout
router.delete('/:id',(req,res) => {
    res.json({mssg: "delete a  workout"})
})


//UPDATE a workout
router.patch('/:id',(req,res) => {
    res.json({mssg: "patch workout"})
})



module.exports = router;