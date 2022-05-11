// 导入 express 模块
const express = require('express')
// 导入 cors 中间件
const cors = require('cors')
// 导入用户路由模块
const userRouter = require('./router/user.js')
// 导入图书模块
const bookRouter = require('./router/book.js')
// 导入需求模块
const needRouter = require('./router/need.js')
// 导入借阅模块
const borrowRouter = require('./router/borrow.js')

// 创建 express 实例
const app = express()

// 注册cors
app.use(cors())

// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 注册用户路由模块
app.use('/api',userRouter)
// 注册图书模块
app.use('/book',bookRouter)
// 注册需求模块
app.use('/need',needRouter)
// 注册借阅模块
app.use('/borrow',borrowRouter)

app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})