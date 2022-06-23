# serve

## 数据库配置
```
1，	首先新建数据库，新建user,admin,books,borrow,need五张表。其中admin表adminname和admincode 值都为admin，修改server下db下的文件将数据库改为自己账号密码，与对应名。
user表
字段名	字段类型	备注
id	int	自增主键
username	varchar	用户名
password	varchar	用户密码
age	varchar	年龄
userstate	int	用户状态

need表
字段名	字段类型	备注
id	int	自增主键
name	varchar	书名

books表
字段名	字段类型	备注
id	int	自增主键
bookname	varchar	图书名
bookauthor	varchar	图书作者
bookprice	varchar	图书价格
bookaddress	varchar	图书出版社
bookdetail	varchar	图书内容
bookstate	int	图书状态
admin表
字段名	字段类型	备注
id	int	主键自增
adminname	varchar	管理员用户名
admincode	varchar	管理员密码
borrow表
字段名	字段类型	备注
id	int	自增主键
username	varchar	用户名
bookname	varchar	图书名
```
### 安装必要库
```
npm i
```
### 启动
```
node app.js
```

