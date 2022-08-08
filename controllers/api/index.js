const router = require('express').Router();
const test = require('./test')

const userRoutes = require('./userRoutes');
const displayStatic = require('./staticSearch')
const displayAll = require('./displayAll');
const displayRandom = require('./randomCocktail')
const searchByNameOrIngredient = require('./searchByNameOrIngredient');

router.use('/test', test);
router.use('/users', userRoutes);

router.use('/display_all', displayAll);
router.use('/static', displayStatic);
router.use('/random', displayRandom);
router.use('/search', searchByNameOrIngredient);

module.exports = router;

