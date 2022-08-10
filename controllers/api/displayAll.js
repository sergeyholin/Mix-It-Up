const router = require('express').Router();
const { Cocktail } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all cocktails from the database page.
router.get('/', withAuth, async (req, res) => {
// router.get('/', async (req, res) => {
  const cocktailData = await Cocktail.findAll().catch((err) => { 
      res.json(err);
    });
      const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
      res.render('all', { cocktails });
    });

module.exports = router;