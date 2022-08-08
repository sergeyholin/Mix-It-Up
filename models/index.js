const user = require('./user')
const Cocktail = require('./cocktail');

// user.belongsToMany(Cocktail, {
//     through:
//  foreignKey: 'user_id',
//  onDelete: 'CASCADE',
// });

Cocktail.belongsTo(user, {
    foreignKey: 'user_id',
})







module.exports = {
    Cocktail,
    user,
};