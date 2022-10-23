// Requiring path
const path = require('path');

// This entails the routing 
module.exports = (app) => {
    // GET /notes returns the 'notes.html' file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    
    // GET * returns the 'index.html' file.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
}