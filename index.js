const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const session = require('koa-session2')
let { sign, verify } = require('jsonwebtoken');
let app = new Koa;
require('./model')
// router
const userInfo = require('./router/userinfo');
app.use(bodyParser())

// 验证路由白名单
let whiteListUrl = {
    get: [],
    post: ['/api/login']
}

const hasOneOf = (str, arr) => {
    return arr.some(item => item.includes(str))
}

app.use(session({
    signed:false,
    maxAge: 20 * 1000
},app))

app.use((ctx, next) => {
    let method = ctx.request.method.toLowerCase();          // 将请求方式转换成小写
    let path = ctx.request.url;                             // 获取到请求的路径
    console.log(method, path, '白名单')
    console.log([method] && hasOneOf(path, whiteListUrl[method]))
    if ([method] && hasOneOf(path, whiteListUrl[method])) next()        // 验证白名单
    else {
        let token;
        if (ctx.request.headers.authorization == undefined) token = undefined;          // 判断参数authorization携带的参数token, 如果
        else token = ctx.request.headers.authorization;
        console.log(token)
        if (!token) {
            console.log('没有登录，请登录')
        } else {
            console.log('登录了， 开始分析jwtwebtoken')
        }
    }
})


router.use('/api', userInfo.routes())


app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('localhost: 3000');
});