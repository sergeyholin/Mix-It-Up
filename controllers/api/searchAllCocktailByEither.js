router.get("/:search_results", async (req, res) => {
  // const { result } = req.query;
  const Op = Sequelize.OP;
  try {
    const CocktailData = await Cocktail.findAll({
      where: {
        [Op.or]: [
          {
            cocktail_name: {
              [Op.like]: "%" + result + "%",
            },
          },
          {
            ingredients: {
              [Op.like]: "%" + result + "%",
            },
          },
        ],
      },
    });

    res.status(200).json(CocktailData);
  } catch (err) {
    res.status(500).json(err);
  }
});
