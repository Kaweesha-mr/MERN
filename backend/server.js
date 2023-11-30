 require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./Routes/workoutsModel')



//setup the express app
const app = express();

//middleware

//this will parse the incoming json data and make it available in the req.body
app.use(express.json());

//next is used to let the codes to continue to the next middleware
app.use((req,res,next) => {
    console.log(req.path,req.method);
    next();
})



//setting up the basic route to test
app.use('/api/workouts',workoutRoutes);

//connet to database
mongoose.connect(process.env.MONG_URI)
.then(() => {
    //listen for requests
app.listen(process.env.PORT, () =>{
    console.log("Connected to DB, listening in",process.env.PORT)
})})
.catch(err => console.log(err));





