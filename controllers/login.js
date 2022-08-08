const router = require('express').Router();
const withAuth = require('../utils/auth');

// Landing page.
router.get('/login', async (req, res) => {
  // logged_in: req.session.logged_in 
  res.render('login');
});



module.exports = router;