const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入用户路由处理函数
const needHandler = require('../router_handler/need.js')

// 添加需求图书
router.post('/addneed',needHandler.addbook)

// 删除需求图书
router.post('/deleteneed',needHandler.deletebook)

// 获取需求图书
router.get('/getneed',needHandler.getbook)

module.exports = router