const router = require('express').Router();
const withAuth = require('../utils/auth');

// Landing page.
// router.get('/', withAuth, async (req, res) => {
  router.get('/', async (req, res) => {
  res.render('landing');
});



module.exports = router;
    