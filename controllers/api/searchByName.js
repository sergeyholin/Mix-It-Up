const router = require('express').Router();
const { Cocktail } = require('../../models');
const { Sequelize, Op } = require("sequelize");

// Get cocktail by name [by keyword] Route.
router.get('/:cocktail_name', async (req, res) => {
  const result = req.params.cocktail_name;
  console.log(result)
  try {
    
    const CocktailData = await Cocktail.findAll({
    // where: {cocktail_name: req.params.cocktail_name},
    where: {
      cocktail_name: {
       [Op.like]: '%' + result + '%',
      },
     },
    });

    res.status(200).json(CocktailData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;