# 博客系统 简易后台
> 基于 `node.js`, `koa`, `koa-router` 开发

- 权限验证 `jwtwebtoken`


``` js
router.get/post('/', ctx => {
    ctx.method;             // 请求时的方法
    ctx.url  || ctx.request.url;                // 请求时的路径
    ctx.query;              // 获取get请求时的参数， json对象
    ctx.querystring;        // 获取get请求时的路由?后的字符串
    ctx.request.body;       // post请求时的json数据
    ctx.header;             // 获取请求时的请求头数据
})
```
// pm2


// sequelize  model 参数设置
``` js
const user = db.define('表名', {
    id: {
        type: db.STRING,    // 数据类型
        primaryKye: true,  // 是否设置为主键
        autoIncrement: true,  // 是否自增
        validate: {
            // 内容验证规则
        },
        allowNull: false,   // 不准为空
        defaultValue: 0, // 默认值
        field: 'fie_ld', // 字段名复合驼峰命名时将字段名修改为下划线形势
    }
}, {
    freezeTableName: true,   // 使用自定义表名
    tableName: '***', // 定义表名
    //去掉默认的添加时间和更新时间
    timestamps: false,
    paranoid: false,  // 只会在timestamps启用的情况下使用, 不实际删除数据库记录, 而是设置一个新的 deletedAt 属性, 其值为当前日期
    indexes:[
	    //普通索引,默认BTREE
        {
            unique: true,
            fields: ['pid']
        },
     ],
     underscored: true,   // 不会覆盖已定义的字段选项属性

})

//同步:没有就新建,有就不变
// users.sync();
//先删除后同步
users.sync({
    force: true
});

```
freezeTableName: true/fasle   