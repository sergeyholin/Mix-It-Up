const router = require('express').Router();
const { Cocktail } = require('../../models');
// const withAuth = require('../../utils/auth');

// 
var min = 0
var max = 687
// Generating random number 0-687

// getRandomIntInclusive(min, max);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
}

// Grabbing random number, and plugging it in inside pick a meme data array
var randomNumber =  getRandomIntInclusive(min, max);

router.get("/", async (req, res) => {

  try {
    const cocktailData = await Cocktail.findAll({
      where: {id: getRandomIntInclusive(min, max)},

    });

    const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
    // res.redirect(`/api/random/${randomNumber}`);
    res.render('all', { 
      cocktails 
  });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;