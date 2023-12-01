const express = require('express');
const router = express.Router();
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout
    ,deleteWorkout

} = require('../Controller/workoutController')


//get all workouts
router.get('/',getWorkouts)

//get a single workout

router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',updateWorkout)


//UPDATE a workout
router.patch('/:id',deleteWorkout)



module.exports = router;