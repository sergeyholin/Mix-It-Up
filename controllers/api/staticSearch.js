const router = require("express").Router();
const { Cocktail } = require("../../models");
const { Sequelize, Op } = require("sequelize");
const withAuth = require('../../utils/auth');

// Static search route
router.get("/:cocktail_name", withAuth, async (req, res) => {
  const result = req.params.cocktail_name;
  console.log(result)
  try {
    const cocktailData = await Cocktail.findAll({
      where: {
        [Op.or]: [
          {
              cocktail_name: {
                  [Op.like]: '%' + result + '%'
              }
          },
          {
              ingredients: {
                  [Op.like]: '%' + result + '%'
              }
          }
      ]
      }
    });
    const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
    res.render('all', { 
      cocktails 
  });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;