var koa = require('koa')
var app = new koa()

app.use(async (ctx, next) => {
    await next()
    // console.log(ctx);
    // ctx.response.body = '<h1>Hello World!</h1>'
    // ctx.response.body = {
    //     url: ctx.request.url,
    //     query: ctx.request.query,
    //     querystring: ctx.request.querystring,
    // }
    let postData = ''
    ctx.req.on('data', data => {
        postData += data
    })
    ctx.req.on('end', () => {
        console.log(postData)
    })
    ctx.response.type = 'json'
    ctx.response.body = {
        userName: 'zhizhi',
        userType: '11',
    }
})
app.listen(52333, () => {
    console.log('server is runing at http://localhost:52333')
})
