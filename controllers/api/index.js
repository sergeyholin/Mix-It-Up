const router = require('express').Router();
const seearchByNameOrIngredient = require('./searchByNameOrIngredient');

router.use('/search', seearchByNameOrIngredient);

module.exports = router;