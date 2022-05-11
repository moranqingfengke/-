// 导入数据库操作模块
const db = require('../db/index')

// 借书处理函数
exports.borrowbook = (req, res) => {
  // 接收表单数据
  const borrowinfo = req.body
  const sql = `insert into borrow set ?`
  db.query(sql, { username: borrowinfo.username, bookname: borrowinfo.bookname }, function(err, results) {
    // 执行sql失败
    if(err){
      return res.send({ status: 1, message: err.message })
    }
    const sql1 = `UPDATE user SET userstate = 1 WHERE username=?`
    db.query(sql1, [borrowinfo.username], function(err, results) {
      // 执行sql失败
      if(err){
        return res.send({ status: 2, message: err.message })
      }
      const sql2 = `UPDATE books SET bookstate = 1 WHERE bookname=?`
      db.query(sql2, [borrowinfo.bookname], function(err, results) {
        // 执行sql失败
        if(err){
          return res.send({ status: 3, message: err.message })
        }
        res.send({ status: 0, message: '借阅成功' })
      })
    })
  })
}

// 归还图书
exports.returnbook = (req, res) => {
  // 接收表单数据
  const borrowinfo = req.body
  const sql = `DELETE FROM borrow WHERE username = "${borrowinfo.username}"`
  db.query(sql, borrowinfo.username, function(err, results) {
    // 执行sql失败
    if(err){
      return res.send({ status: 1, message: err.message })
    }
    const sql1 = `UPDATE user SET userstate = 0 WHERE username=?`
    db.query(sql1, [borrowinfo.username], function(err, results) {
      // 执行sql失败
      if(err){
        return res.send({ status: 2, message: err.message })
      }
      const sql2 = `UPDATE books SET bookstate = 0 WHERE bookname=?`
      db.query(sql2, [borrowinfo.bookname], function(err, results) {
        // 执行sql失败
        if(err){
          return res.send({ status: 3, message: err.message })
        }
        res.send({ status: 0, message: '归还成功' })
      })
    })
  })
}

// 查询特定用户的带归还图书
exports.getrebook = (req, res) => {
  // 接收表单数据
  const borrowinfo = req.body
  const sql = `select * from borrow where username=?`
  db.query(sql, borrowinfo.username, function(err, results) {
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: results })
    }
  })
}

// 查询所有用户与待归还图书
exports.getallrebook = (req, res) => {
  const sql = `select * from borrow`
  db.query(sql, function(err, results) {
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: results })
    }
  })
}