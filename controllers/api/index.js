const router = require('express').Router();
const seearchByNameRoutes = require('./searchByName');

router.use('/name', seearchByNameRoutes);

module.exports = router;