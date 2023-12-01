const Workout = require('../models/Workout')
const mongoose = require('mongoose')

//get all workouts

const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}.sort({createdAt: -1}))

    res.status(200).json(workouts)
}


//get a single workout
const getWorkout = async (req,res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "invalid id"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: "no such workout"})
    }
    res.status(200).json(workout)

}



//create workout


const createWorkout = async (req,res) => {
    const{title,loads,reps} = req.body;

    try{
        const workout = await Workout.create({title,loads,reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({mssg: "post a new workout"})
}


//delete worjiyt



//update workout





module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts

}