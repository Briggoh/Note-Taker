// Requiring NPM express package
const express = require('express');

// Utilizing the express package 
const app = express();

// Creating a PORT
const PORT = process.env.PORT || 3009;

// This asks express to create a route for all files contained 
// within the 'public' folder and assigns it a '/' route
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// These are the routes used to route the files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// This makes the server live
app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
})