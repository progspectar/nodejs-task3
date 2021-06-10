const Sequelize = require('sequelize');
//database username   password
const sequelize = new Sequelize('gamedb', 'postgres', '123', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
});

sequelize.authenticate().then(
  function success() {
    console.log('Connected to DB');
  },

  function fail(err) {
    console.log(`Error: ${err}`);
  }
);
module.exports = sequelize;
