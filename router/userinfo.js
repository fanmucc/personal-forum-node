const router = require('koa-router')()
const ctxBody = require('../utils/returnCode')
const regExp= require('../utils/regExp')
let jwt = require('jsonwebtoken');
router.post('/login', (ctx, next) => {
    // const url = ctx.url // 请求的url
    // const method = ctx.method   // 请求的方法
    // const query = ctx.query // 请求参数   git方法
    // const post = ctx.request.body;
    // const querystring = ctx.querystring // url字符串格式的请求参数
    // ctx.response.status = 200;
    // ctx.cookies.set('token', '12345678910tokens', {maxAge: 20000})
    const { username, password } = ctx.request.body;
    let body = {}
    async function getName () {
         let name = regExp.Email.test(username) === false ? await User.findOne({where: {username: `${username}`}}) :  await User.findOne({where: {email: `${username}`}})
         return name
    }
    async function getPassword () {
        let password = regExp.Email.test(username) === false ? await User.findOne({where: {username: `${username}`, password: `${password}`}}) : await User.findOne({where: {email: `${username}`, password: `${password}`}})
    }
    if (getName !== null && getPassword !== null) {
        ctx.response.status = 200;
        body = {
            token: jwt.sign({name: username}, 'YOU', {
                expiresIn: '6h'
            }),
            success: true
        }
    } else if (getName == null) {
        ctx.response.status = 200;
        body = ctxBody(200, false, '用户账号不存在')
    } else {
        ctx.response.status = 200;
        body = ctxBody(200, false, '用户密码不正确, 请重新输入')
    }
    ctx.body = body
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
