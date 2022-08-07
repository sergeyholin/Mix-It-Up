const router = require('express').Router();
const seearchByNameOrIngredient = require('./searchByNameOrIngredient');
const displayAll = require('./displayAll');

router.use('/search', seearchByNameOrIngredient);
router.use('/display_all', displayAll);

module.exports = router;