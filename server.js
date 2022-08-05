// Express requires
const express = require("express")
const routes = require('./routes');
// Handlebars requires
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// Express dependencies
const app = express();
const PORT = process.env.PORT || 3001;

// Express Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Express rerouting
app.use(routes);

// Start server to egin listening
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}!`);
});