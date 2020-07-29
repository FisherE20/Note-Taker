//====================================
//Load Data
//====================================



//=====================================
//Routing
//=====================================
module.exports = function (app){
    //API GET Request

    app.get("/api/notes", function(req,res){ 
        res.json(noteData);
    });

    //API POST Request

    app.post("/api/notesData", function(req,res) {
        if(noteData.length<20){
            noteData.push(req.body);
            res.json(true);
        }
        else {
            
        }
        res.json(noteData);
    })
}