const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入借阅处理函数
const borrowHandler = require('../router_handler/borrow.js')

// 借阅图书
router.post('/borrowbook', borrowHandler.borrowbook)

// 归还图书
router.post('/returnbook', borrowHandler.returnbook)

// 查询特定用户的带归还图书
router.post('/getrebook', borrowHandler.getrebook)

// 查询所有用户与待归还图书
router.get('/getallrebook', borrowHandler.getallrebook)

module.exports = router