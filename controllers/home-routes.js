const router = require('express').Router();
const { Cocktail } = require('../models');
const search = "Vodka"

router.get('/', async (req, res) => {
  const partial = await Cocktail.findAll({
    where: Sequelize.where(Sequelize.col('ingredients')), {
      [Op.iLike]: `%${search}%`
    });
  
  });

// route to get all dishes
router.get('/', async (req, res) => {
    const cocktailData = await Cocktail.findAll().catch((err) => { 
        res.json(err);
      });
        const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
        res.render('all', { cocktails });
      });
    

// route to get one dish
// router.get('/dish/:id', async (req, res) => {
//   try{ 
//       const dishData = await Dish.findByPk(req.params.id);
//       if(!dishData) {
//           res.status(404).json({message: 'No dish with this id!'});
//           return;
//       }
//       const dish = dishData.get({ plain: true });
//       res.render('dish', dish);
//     } catch (err) {
//         res.status(500).json(err);
//     };     
// });

module.exports = router;
    