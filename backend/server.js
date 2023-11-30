const express = require('express')


//setup the express app
const app = express();

//listen for requests
app.listen(4000, () =>{
    console.log("listening in 4000")
})