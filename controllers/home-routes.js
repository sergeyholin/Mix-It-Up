const router = require('express').Router();
const { Cocktail } = require('../models');
// const search = "Vodka"

// router.get('/', async (req, res) => {
//   const partial = await Cocktail.findAll({
//     where: Sequelize.where(Sequelize.col('ingredients')), {
//       [Op.iLike]: `%${search}%`
//     });
  
//   });

// Get all cocktails from the db Route.
router.get('/', async (req, res) => {
    const cocktailData = await Cocktail.findAll().catch((err) => { 
        res.json(err);
      });
        const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
        res.render('', { cocktails });
      });

module.exports = router;
    