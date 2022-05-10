// 导入express
const express = require('express')
    // 创建web服务器
const app = express()
    // 静态资源
app.use(express.static('./views'))
    // 启动web服务器
app.listen(80, () => {
    console.log('http://127.0.0.1')
})