// Requiring path 
const path = require('path');
// Requiring NPM package fs
const fs = require('fs')

// Requiring NPM package uniqid
var uniqid = require('uniqid');


// This entails routing
module.exports = (app) => {
  // This scans the db.json file and returns all previously saved notes as a JSON
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
      // This produces a unique id for each note
      id: uniqid(),
    };
    // This pushes the newly created note into the db.json file
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });

  // *** DELETE NOTE FUNCTION!***
  app.delete('/api/notes/:id', (req, res) => {
    // This scans the notes on the db.json file
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    // This removes the notes via id
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    // This rewrites the note to the db.json file
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
    
  })
};


