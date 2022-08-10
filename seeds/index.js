const seedCocktails = require('./cocktails');
const seedUsers = require('./users')
const seedImages = require('./images')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCocktails();
  console.log('\n----- COCKTAILS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedImages();
  console.log('\n----- IMAGES SEEDED -----\n');

  process.exit(0);
};

seedAll();