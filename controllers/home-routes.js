const router = require('express').Router();
const { Cocktail } = require('../models');
const search = "Vodka"

router.get('/', async (req, res) => {
  const partial = await Cocktail.findAll({
    where: Sequelize.where(Sequelize.col('ingredients')), {
      [Op.iLike]: `%${search}%`
    });
  
  });

// route to get all Coktails
router.get('/', async (req, res) => {
    const cocktailData = await Cocktail.findAll().catch((err) => { 
        res.json(err);
      });
        const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
        res.render('all', { cocktails });
      });

module.exports = router;
    