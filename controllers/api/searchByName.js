const router = require('express').Router();
const { Cocktail } = require('../../models');
const { Sequelize, Op } = require("sequelize");

// router.get('/:cocktail_name', async (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
//   try {
//     const CocktailData = await Cocktail.findOne({
//     where: {cocktail_name: req.params.cocktail_name},
//     // where: { name: { [Op.like]: `%${"Hapiness"}%` } },
    
   
//     });

//     res.status(200).json(CocktailData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/:cocktail_name', async (req, res) => {
  // const { result } = req.query;
  try {
    const CocktailData = await Cocktail.findOne({
    // where: {cocktail_name: req.params.cocktail_name},
    // const { result } = req.query;
    
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