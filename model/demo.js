module.exports = sql => {
    sql.query(
        'SELECT table_name FROM information_schema.TABLES WHERE table_name = "image"',
        (err, res) => {
            if(res.length) return
            console.log(err)
        }
    )
}