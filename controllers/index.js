const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;