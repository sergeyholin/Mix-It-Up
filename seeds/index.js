const seedCocktails = require('./cocktails');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCocktails();
  console.log('\n----- COCKTAILS SEEDED -----\n');

  process.exit(0);
};

seedAll();