const router = require('express').Router();

// Landing page.
router.get('/', async (req, res) => {

  res.render('landing');
});

module.exports = router;
    