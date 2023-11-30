const mongoose = require('mongoose');

const scheema = mongoose.Schema

const workoutScheema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
    }, {timestamps: true})


    module.exports = mongoose.model('Workout', workoutScheema)

    