const path = require('path');
const express = require("express")
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const hbs = exphbs.create({ helpers });

// Express dependencies
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    // store: new SequelizeStore({
    //   db: sequelize
    // })
  };

app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express Middleware
app.use(express.json())
// TRUE OR FALSE?
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Start server to begin listening
// app.listen(PORT, () => {
// console.log(`App listening on port ${PORT}!`);
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});