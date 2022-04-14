const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入书籍路由处理函数
const bookHandler = require('../router_handler/book.js')

// 添加图书
router.post('/addbook',bookHandler.addbook)

// 删除图书
router.post('/deletebook',bookHandler.deletebook)

// 获取图书详情
router.post('/bookdetail', bookHandler.bookdetail)

// 修改图书
router.post('/updatebook', bookHandler.updatebook)

// 获取图书
router.get('/getbook', bookHandler.getbook)

module.exports = router