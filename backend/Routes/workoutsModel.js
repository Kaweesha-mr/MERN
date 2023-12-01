const express = require('express');
const router = express.Router();
const {
    createWorkout,
    getWorkout,
    getWorkouts

} = require('../Controller/workoutController')


//get all workouts
router.get('/',getWorkouts)

//get a single workout

router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',(req,res) => {
    res.json({mssg: "delete a  workout"})
})


//UPDATE a workout
router.patch('/:id',(req,res) => {
    res.json({mssg: "patch workout"})
})



module.exports = router;