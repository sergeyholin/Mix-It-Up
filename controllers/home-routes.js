const router = require('express').Router();
const { Cocktail } = require('../models');

// route to get all Coktails
router.get('/', async (req, res) => {
    const cocktailData = await Cocktail.findAll().catch((err) => { 
        res.json(err);
      });
        const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
        res.render('all', { cocktails });
      });

module.exports = router;
    