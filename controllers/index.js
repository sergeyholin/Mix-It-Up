const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login');
// Home, api, login routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
// Error handler & validator
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;