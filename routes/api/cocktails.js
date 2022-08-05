const router = require('express').Router();
const { Cocktail } = require('../../models');


// FIND ALL {Cocktails}------------------------------------------------------------------------------
router.get('/', async (req, res) => {
    try {
      const cocktailData = await Cocktail.findAll();
  
      res.status(200).json(cocktailData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;