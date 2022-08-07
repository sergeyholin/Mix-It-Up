const router = require("express").Router();
const { Cocktail } = require("../../models");
const { Sequelize, Op } = require("sequelize");

// Get cocktail by name or ingredient [by keyword] route.
router.get("/:cocktail_name", async (req, res) => {
  const result = req.params.cocktail_name;
  // const result = "martini";
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
    // res.status(200).json(cocktailData);
    const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
    res.render('all', { 
      cocktails 
  });
  } catch (err) {
    res.status(500).json(err);
    const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
    res.render('all', { cocktails });
  }

});

module.exports = router;

