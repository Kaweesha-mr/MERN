 require('dotenv').config();
const express = require('express')



//setup the express app
const app = express();

//next is used to let the codes to continue to the next middleware
app.use((req,res,next) => {
    console.log(req.path,req.method);
    next();
})



//setting up the basic route to test
app.get('/', (req,res) => {
    res.json({mssg:'welcome to the app'})

})



//listen for requests
app.listen(process.env.PORT, () =>{
    console.log("listening in",process.env.PORT)
})


