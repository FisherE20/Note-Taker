//====================================
//dependencies
//====================================

let path = require("path");
let fs = require("fs");



// ====================================
// Data
// ====================================
let notes = [{
    title: "Hello, Everyone",
    text: "Lets see if this works",
    id: 0 
}]

//=====================================
//Routing
//=====================================

module.exports = function (app){
    app.get("/api/notes", function (req,res) {
        res.sendFile(path.join (__dirname,"./db/db.json"));
    });

    //Update a note with Id
    app.get("/api/notes/:id", function(req,res) {
        let savedNotes = JSON.parse(fs.readFileSync( "../db/db.json", "utf8"));
        return res.json(savedNotes[Number(req.params.id)]);
    });

    //Create new note
    app.post("/api/notes", function(req,res) { 
        console.log("Inside POST\n", req.body);
        let saveNote = JSON.parse(fs.readFileSync(path.join(__dirname,"./db/db.json"), "utf8"));
        let newNote = req.body;
        let id =(saveNote.length).toString();
        
        newNote.id = id;
        saveNote.push(newNote);
        //Write the new note 
        fs.writeFileSync(path.join(__dirname,"./db/db.json"), JSON.stringify(saveNote));
        console.log("Congradulations! Your note has been saved");
        res.json(saveNote);
    });


     //Delete a note with Id
    app.delete("/api/notes/:id", function(req,res){
        let saveNote = JSON.parse(fs.readFileSync(path.join(__dirname,"./db/db.json"), "utf8"));
        let noteId = req.params.id;
        console.log(noteId)
        

        console.log('Note: ${noteId successfully removed');
        saveNote = saveNote.filter(currNote => {
            return currNote.id != noteId;
        });

        fs.writeFileSync(path.join(__dirname,"./db/db.json"), JSON.stringify(saveNote));
        res.json(saveNote);
    })
}

