const express = require('express');

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

router.post('/:id',(req,res) => {
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