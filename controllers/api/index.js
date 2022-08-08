const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchByNameOrIngredient = require('./searchByNameOrIngredient');
const displayAll = require('./displayAll');

router.use('/users', userRoutes);
router.use('/search', searchByNameOrIngredient);
router.use('/display_all', displayAll);

module.exports = router;