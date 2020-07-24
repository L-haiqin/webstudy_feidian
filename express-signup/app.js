var express = require('express');
var bodyParser = require('body-parser');

var dataList = [
    {
        name:'琴琴',
        number:'2018317210421'
    },
    {
        name:'欢欢',
        number:'2018317260354'
    },
    {
        name:'华华',
        number:'2018317210111'
    }
];

var app = express();
// 配置公共资源
app.use(express.static('public'));
// 配置使用art-template 模版引擎
app.engine('html',require('express-art-template'));
// 配置body-parser，实现post接受数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',function (req,res) {
    res.render('index.html');
});

// 报名操作，输入姓名和学号
app.post('/',function (req,res) {
    console.log(req.body);

    var postData = req.body;
    dataList.unshift(postData);
    res.redirect('/show');
});

// 显示报名信息
app.get('/show',function (req,res) {
    res.render('show.html',{dataList:dataList});
});

app.listen(8080,function () {
    console.log('已启动服务');
});