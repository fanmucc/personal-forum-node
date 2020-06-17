const users = (db, sequelize, tableName) => {
    return User = sequelize.define(tableName, {
        id: {
            type: db.INTEGER,  // INTEGER int 数字, int
            primaryKey: true,  // primaryKey 设置为主键
            autoIncrement: true,  // 开启自增
            comment: '用户 id'  // 字段备注
        },
        username: {
            type: db.STRING(16),
            allowNull: false,
            comment: '用户账号'  // 字段备注
        },
        password: {
            type: db.STRING(255),
            allowNull: false,
            comment: '用户密码'  // 字段备注
        },
        email: {
            type: db.STRING(255),
            allowNull: false,
            comment: '用户邮箱',  // 字段备注
            validate:{
                isEmail: true,   //类型检测,是否是邮箱格式
            }
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
module.exports = users