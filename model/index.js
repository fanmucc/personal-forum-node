// const mysql = require('mysql')

// const mysqlConfig = require('../config/mysql.config')

// const sql = mysql.createConnection(mysqlConfig)

// sql.connect()

// require('./demo')(sql)

// module.exports = sql

const mysqlConfig = require('../config/mysql.config')

const db = require('sequelize');

const users = require('../model/models/users');

const labels = require('../model/models/label');

const sequelize = new db(mysqlConfig.database, mysqlConfig.user, mysqlConfig.password, {
  host: mysqlConfig.host,
  dialect: mysqlConfig.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // dialectOptions: {
  //   charset: 'utf8mb4'
  // },
})

const uesr = users(db, sequelize, 'user')
const label = labels(db, sequelize, 'label')
uesr.sync()
label.sync()
// uesr.sync({
//   force: true
// });

module.exports = sequelize