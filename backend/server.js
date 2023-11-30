 require('dotenv').config();
const express = require('express')



//setup the express app
const app = express();



//setting up the basic route to test
app.get('/', (req,res) => {
    res.json({mssg:'welcome to the app'})

})


//listen for requests
app.listen(process.env.PORT, () =>{
    console.log("listening in",process.env.PORT)
})


