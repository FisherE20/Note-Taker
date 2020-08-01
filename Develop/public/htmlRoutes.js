// ==========================
// Dependencies
// ==========================
let path = require("path");


//===========================
//Routing
//===========================
module.exports = function (app) {
    
    //HTML GET Requests
    // notes page
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname, "notes.html"));
    });

    // homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
      });
};