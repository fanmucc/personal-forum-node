const devConfig = {
    host: '127.0.0.1',
    database: 'blog',
    user: 'root',
    password: 'WANGhui.123',
    dialect: 'mysql',
    port: 3306
}
const prodConfig = {
    host: '47.56.134.154',
    user: 'root',
    password: '!QAZxsw2',
    database: 'blog',
    dialect: 'mysql',
    port: 3306
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig