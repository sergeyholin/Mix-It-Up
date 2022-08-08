const path = require("path");

const sequelize = require("./config/connection");

const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// Express requires
const express = require("express");
// const routes = require('./routes');
// Handlebars requires
const exphbs = require("express-handlebars");

const hbs = exphbs.create({});

// Express dependencies
const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Express rerouting
// app.use(routes);

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// Handlebars
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

// // Start server to egin listening
// app.listen(PORT, () => {
// console.log(`App listening on port ${PORT}!`);
// });
