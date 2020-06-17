const labels = (db, sequelize, tableName) => {
    return label = sequelize.define(tableName,{
        id: {
            type: db.INTEGER,  // INTEGER int 数字, int
            primaryKey: true,  // primaryKey 设置为主键
            autoIncrement: true,  // 开启自增
            comment: 'label id'  // 字段备注
        },
        theme: {
            type: db.STRING(255),
            allowNull: false,
            comment: '标签名称'
        },
        createdAt: {
            type: db.DATE,
            defaultValue: db.NOW
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
}
module.exports = labels