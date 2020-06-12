const mysql = require('mysql')

const mysqlConfig = require('../config/mysql.config')

const sql = mysql.createConnection(mysqlConfig)

sql.connect()

require('./demo')(sql)

module.exports = sql
