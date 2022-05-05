// 导入数据库操作模块
const db = require('../db/index')

// 添加图书
exports.addbook = (req, res) => {
  // 接收表单数据
  const bookinfo = req.body
  const sql = 'insert into books set ?'
  db.query(sql, { bookname: bookinfo.bookname, bookauthor: bookinfo.bookauthor, bookaddress: bookinfo.bookaddress, bookprice: bookinfo.bookprice, bookdetail: bookinfo.bookdetail }, function(err, results){
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: '添加图书成功' })
    }
  })
}

// 删除图书
exports.deletebook = (req, res) => {
  // 接收表单数据
  const bookinfo = req.body
  // 删除
  const sql = `DELETE FROM books WHERE bookname = "${bookinfo.bookname}"`
  db.query(sql, bookinfo.bookname, function(err, results) {
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: '删除成功！' })
    }
  })
}

// 获取图书详情
exports.bookdetail = (req, res) => {
  const bookinfo = req.body
  const sql = `select * from books where bookname=?`
  db.query(sql, bookinfo.bookname, function(err, results){
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: results })
    }
  })
}

// 修改图书
exports.updatebook = (req, res) => {
  const bookinfo = req.body
  const sql = 'UPDATE books SET bookaddress = ? WHERE bookname = ?'
  db.query(sql, [bookinfo.bookaddress,bookinfo.bookname], function(err, results){
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: '修改成功！' })
    }
  })
}

// 获取图书
exports.getbook = (req, res) => {
  const bookinfo = req.body
  const sql = `SELECT * FROM books`
  db.query(sql, function(err, results){
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: results })
    }
  })
}