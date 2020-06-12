const router = require('koa-router')()

router.post('/login', function (ctx, next) {
    const url = ctx.url // 请求的url
    const method = ctx.method   // 请求的方法
    const query = ctx.query // 请求参数   git方法
    const post = ctx.request.body;
    const querystring = ctx.querystring // url字符串格式的请求参数
    ctx.response.status = 200;
    // ctx.cookies.set('token', '12345678910tokens', {maxAge: 20000})
    ctx.body = {
        url,
        method,
        query,
        querystring,
        post
    };

})

router.post('/registered', function (ctx, next) {
    try {
        const post = ctx.request.body;
        ctx.body = {
            status: 400,
            post
        }
    } catch {
        throw new Error(500)
    }
    
})

module.exports = router
