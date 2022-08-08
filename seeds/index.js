const seedCocktails = require('./cocktails');
const seedUsers = require('./users')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCocktails();
  console.log('\n----- COCKTAILS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();