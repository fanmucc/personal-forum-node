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