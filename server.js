// Requiring express package from NPM
const express = require('express');

// Initializes the usage of express package
const app = express();

// Creates a PORT
const PORT = process.env.PORT || 3008;

// Requires express to produce a route for the files within the public folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// This routes to the "route" files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// This initializes the server 
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});