const router = require('express').Router();

// Landing page.
router.get('/', async (req, res) => {

  res.render('landing');
});

router.post('/',(req,res) => {
  if(typeof req.body.bar === 'undefined'){
    // The parameter is missing, example response...
    res.status(400).json({ error: 'missing parameter bar', data: null }); // Only an  example
    return;
  }

  let result = req.body.result;

  // res.status(200).json({ error: null, data: bar }); // We received the value and only to show the example, returns it in a json within the key 'data'
  
    //   // res.status(200).json(cocktailData);
    const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
    res.render('all', { 
      cocktails 
  });

});

module.exports = router;
    