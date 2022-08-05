const router = require('express').Router();
const drink = require('../../models/Drink');

// // route to create/add a dish using async/await
// router.post('/', async (req, res) => {
//   try { 
//     const drinkData = await drink.create({
//     dish_name: req.body.drink_name,
//     ingredients: req.body.ingredients,
//     directions: req.body.directions,
//     });
//   // if the drink is successfully created, the new response will be returned as json
//   res.status(200).json(drinkData)
// } catch (err) {
//   res.status(400).json(err);
// }
// });


// module.exports = router;
