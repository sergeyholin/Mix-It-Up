const router = require('express').Router();
const userRoutes = require('./userRoutes');
const displayStatic = require('./staticSearch')
const displayAll = require('./displayAll');
const searchByNameOrIngredient = require('./searchByNameOrIngredient');


router.use('/users', userRoutes);
router.use('/display_all', displayAll);
router.use('/static', displayStatic);
router.use('/search', searchByNameOrIngredient);

module.exports = router;