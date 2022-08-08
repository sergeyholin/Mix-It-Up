const router = require('express').Router();
const searchByNameOrIngredient = require('./searchByNameOrIngredient');
const displayAll = require('./displayAll');

router.use('/search', searchByNameOrIngredient);
router.use('/display_all', displayAll);

module.exports = router;