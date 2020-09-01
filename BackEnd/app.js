var koa = require('koa')
var app = new koa()

app.use(async (ctx, next) => {
    let start = +new Date()
    console.log(start)
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
    let end = + new Date()
    console.log(end)
    console.log('使用时间：' + (end - start) + 'ms')
})
app.use(async (ctx, next) => {
    console.log(1111)
    await next()
    console.log(2222)
})
app.listen(52333, () => {
    console.log('server is runing at http://localhost:52333')
})
