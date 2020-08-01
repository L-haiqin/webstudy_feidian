var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');

var app = express();

// 配置公共资源
app.use(express.static('./public'));

// 配置使用art-template 模版引擎
app.engine('html',require('express-art-template'));

// 配置body-parser，实现post接受数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// 把路由挂载到app入口文件
app.use(router);

app.listen(8080,function () {
    console.log('已启动服务');
});

// 模块接口
module.exports = app;