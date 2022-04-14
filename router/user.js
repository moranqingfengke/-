const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数
const userHandler = require('../router_handler/user.js')

// 注册新用户
router.post('/reguser', userHandler.regUser)

// 登录
router.post('/login', userHandler.login)

// 删除用户
router.post('/delete', userHandler.delete)

// 获取用户详细信息
router.post('/userdetail', userHandler.userdetail)

// 修改密码
router.post('/updatepw', userHandler.updatepw)

// 获取用户信息
router.get('/getuser', userHandler.getuser)

module.exports = router