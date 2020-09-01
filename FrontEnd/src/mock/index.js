// 首先引入Mock
import Mock from 'mockjs'

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
})

let configArray = []

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('./modules/', true, /\.js$/)
files.keys().forEach((key) => {
    configArray = configArray.concat(files(key).default)
})
console.log(configArray)
// 注册所有的mock服务
configArray.forEach((item) => {
    for (let [path, target] of Object.entries(item)) {
        console.log(target)
        let protocol = path.split('|')
        Mock.mock(new RegExp('^' + protocol[1]), protocol[0], typeof target === 'function' ? target() : target)
    }
})
