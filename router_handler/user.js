// 导入数据库操作模块
const db = require('../db/index')

// 注册用户的处理函数
exports.regUser = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // 判断数据是否合法
  if(!userinfo.username || !userinfo.password || !userinfo.age) {
    return res.send({ status: 1, message: '用户名,密码或年龄不能为空' })
  }
  // 判断用户名是否被占用
  const sql = `select * from user where username=?`
  db.query(sql, [userinfo.username], function(err, results) {
    // 执行sql失败
    if(err){
      return res.send({ status: 1, message: err.message })
    }
    // 被占用
    if(results.length > 0){
      return res.send({ status: 2, message: '用户名已被使用，请更换！' })
    }
    // 插入新用户
    const sql = 'insert into user set ?'
    db.query(sql, { username: userinfo.username, password: userinfo.password, age: userinfo.age }, function(err, results) {
      // 执行sql语句失败
      if(err){
        return res.send({ status: 1, message: err.message })
      }
      // 注册成功
      res.send({ status: 0, message: '注册成功！' })
    })
  })
}

// 登录的处理函数
exports.login = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // 查询用户数据
  const sql = `select * from user where username="${userinfo.username}" AND password="${userinfo.password}" `
  db.query(sql, userinfo.username, function(err, results) {
    // 执行sql失败
    if(err){
      return res.send({ status: 1, message: err.message })
    }
    if(results.length !== 1){
      return res.send({ status: 1, message: '登陆失败！' })
    }else{
      return res.send({ status: 0, message: '登陆成功！' })
    }
  } )
}

// 删除用户
exports.delete = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // 删除
  const sql = `DELETE FROM user WHERE username = "${userinfo.username}"`
  db.query(sql, userinfo.username, function(err, results) {
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: '删除成功！' })
    }
  })
}

// 获取用户信息
exports.userdetail = (req, res) => {
  const userinfo = req.body
  const sql = `select * from user where username=?`
  db.query(sql, userinfo.username, function(err, results) {
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: results })
    }
  })
}

// 修改密码
exports.updatepw = (req, res) => {
  const userinfo = req.body
  const sql = `UPDATE user SET password = ? WHERE username=? `
  db.query(sql, [userinfo.password, userinfo.username], function(err, results){
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: '修改成功！' })
    }
  })
}

// 获取用户列表
exports.getuser = (req, res) => {
  const sql = `SELECT * FROM user`
  db.query(sql, function(err,results){
    if(err){
      return res.send({ status: 1, message: err.message })
    }else{
      return res.send({ status: 0, message: results })
    }
  })
}