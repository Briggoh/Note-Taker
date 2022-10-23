// Requiring path 
const path = require('path');
// Requiring NPM fs package
const fs = require('fs');

// This pertains to routing
module.exports = (app) => {

    // This scans the db.json file and returns all saved notes as JSON.
    app.get('/api/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../db/db.json'));
    });
   
    app.post('/api/notes', (req, res) => {
      let db = fs.readFileSync('db/db.json');
      db = JSON.parse(db);
      res.json(db);
      // This creates the body for the note
      let userNote = {
        title: req.body.title,
        text: req.body.text,
        // Creates a unique id using the NPM uniqid package
        id: uniqid(),
      };
      // This pushes the created note to be written into the db.json file
      db.push(userNote);
      fs.writeFileSync('db/db.json', JSON.stringify(db));
      res.json(db);
    });

    // This allows the user to delete notes
    app.delete('/api/notes/:id', (req, res) => {
      // reading notes form db.json
      let db = JSON.parse(fs.readFileSync('db/db.json'))
      // This removes the note with the id
      let deleteNotes = db.filter(item => item.id !== req.params.id);
      // This rewrites the note to db.json file
      fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
      res.json(deleteNotes);
    })
  };