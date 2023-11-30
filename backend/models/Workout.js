const mongoose = require('mongoose');

const scheema = mongoose.Schema

const workoutScheema = new scheema({
    title:{
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    loads: {
        type: Number,
        required: true
    }
    }, {timestamps: true})


    module.exports = mongoose.model('Workout', workoutScheema)

    