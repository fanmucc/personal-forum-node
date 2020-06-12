const devConfig = {
    host: '47.56.134.154',
    database: 'blog',
    user: 'root',
    password: '!QAZxsw2',
    port: 3306
}
const prodConfig = {
    host: '***.***.***',
    database: 'blog',
    port: 3306
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig