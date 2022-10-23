// This requires the 'path'
const path = require('path');

// This entails routing
module.exports = (app) => {

  // This creates routes
  // This returns notes from the html file
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // GET * returns the index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
};