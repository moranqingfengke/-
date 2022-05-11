const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入借阅处理函数
const borrowHandler = require('../router_handler/borrow.js')

// 借阅图书
router.post('/borrowbook', borrowHandler.borrowbook)

// 归还图书
router.post('/returnbook', borrowHandler.returnbook)

module.exports = router