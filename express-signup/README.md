1. 初始化
npm init -y


2. 安装express
npm install --save express


3. 安装art-template
npm i --save art-template express-art-template


4. 配置静态资源
app.use(express.static('./public'));


5. 安装body-parser
npm install --save body-parser

使用：
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


6. 安装mongoose
npm install mongoose

API官方文档：https://mongoosejs.com/docs/api/model.html#model_Model.findById


7. 安装bootstrap
npm install bootstrap

在线教程：https://v3.bootcss.com/css/


8. 导出模块接口
module.exports = router;+
