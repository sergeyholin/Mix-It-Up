const router = require('express').Router();

// Login/Signup page.
router.get('/', async (req, res) => { 
  res.render('login');
});

module.exports = router;