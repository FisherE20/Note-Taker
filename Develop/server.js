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
let PORT = 3036;
console.log("Successfully opened port" + PORT);

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//=========================================================
//ROUTER
//=========================================================
require("./public/apiRoutes.js")(app);
require("./public/htmlRoutes.js")(app);

//=========================================================
//Listener
//=========================================================
app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});
