const express = require('express')


//setup the express app
const app = express();



//setting up the basic route to test
app.get('/', (req,res) => {
    res.json({mssg:'welcome to the app'})

})


//listen for requests
app.listen(4000, () =>{
    console.log("listening in 4000")
})