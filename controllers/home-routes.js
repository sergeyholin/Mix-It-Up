const router = require('express').Router();

// Landing page.
router.get('/', async (req, res) => {
<<<<<<< HEAD
    const cocktailData = await Cocktail.findAll().catch((err) => { 
        res.json(err);
      });
        const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
        res.render('', { cocktails });
      });
=======
  res.render('landing');
});
>>>>>>> 50bd94d7743f2172eb670efa22a3e83f2f043920

module.exports = router;
    