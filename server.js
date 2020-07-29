//=========================================================
//Dependencies
//=========================================================
let express = require("express");
let fs = require("fs");
let path = require("path");

//=========================================================
//Express Config
//=========================================================

//Tell node that we are creating an "express" server
let app = express();
//Sets an inital port. 
let PORT = 6000;
console.log("Successfully opened port 6000");

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//=========================================================
//ROUTER
//=========================================================
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

//=========================================================
//Listener
//=========================================================
app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});