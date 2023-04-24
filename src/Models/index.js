const { Sequelize } = require('sequelize')
const config = require('../config/config')
const sequelize = new Sequelize(config.db_database,config.db_user,config.db_pass, {
    host: config.db_host,
    port: config.db_port,
    dialect: config.db_dialect
});

module.exports = sequelize;


// // test kết nối
// try {
//     sequelize.authenticate();
//     console.log('thành công');
// } catch {
//     console.log('thất bại');
// }

// yarn add sequelize-auto
// yarn nodemon src/Models/index.js