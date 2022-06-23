// 导入MySQL模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
  host: '127.0.0.1',
  user: '数据库用户名',
  password: '数据库密码',
  database: '对应数据库',
})

module.exports = db