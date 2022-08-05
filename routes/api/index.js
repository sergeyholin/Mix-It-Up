const router = require('express').Router();
const cocktailRoutes = require('./cocktails');

router.use('/cocktails', cocktailRoutes);

module.exports = router;