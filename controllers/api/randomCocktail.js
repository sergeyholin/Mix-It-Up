const router = require('express').Router();
const { Cocktail } = require('../../models');
const withAuth = require('../../utils/auth');

// Generating random number between 0-687.
var min = 0
var max = 687

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Random cocktail generator page.
router.get("/", withAuth, async (req, res) => {
// router.get("/", async (req, res) => {
  try {
    const cocktailData = await Cocktail.findAll({
      where: {id: getRandomIntInclusive(min, max)},
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