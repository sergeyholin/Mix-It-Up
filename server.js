const path = require('path');
// Express requires
const express = require("express")
const routes = require('./routes');
// Handlebars requires
const exphbs = require('express-handlebars');

const hbs = exphbs.create({});

// Express dependencies
const app = express();
const PORT = process.env.PORT || 3001;

// Express Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Express rerouting
app.use(routes);

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Handlebars
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// Start server to egin listening
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}!`);
});