const router = require("express").Router();
const { Cocktail, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all cocktails
    const projectData = await Cocktail.findAll({
      attributes: ["cocktail name", "ingredients", "preparation", "garnish"],
    });
    // Serialize data so the template can read it
    const cocktails = cocktailData.map((cocktail) =>
      cocktail.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("homepage", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
