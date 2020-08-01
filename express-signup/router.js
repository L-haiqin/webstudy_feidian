var express = require('express');
var Student = require('./student');

// express提供了路由，先创建一个路由容器
var router = express.Router();

// 首页，填写报名信息
router.get('/',function (req,res) {
    res.render('index.html');
});

// 报名操作，输入姓名和学号
router.post('/',function (req,res) {
    console.log(req.body);

    Student.save(req.body,function (err) {
        if(err){
            return res.status(500).send("server error.")
        }
        res.redirect('/show');
    });

    // var postData = req.body;
    // dataList.unshift(postData);
    // res.redirect('/show');
});

// 显示报名信息
router.get('/show',function (req,res) {

    Student.find(function (err,students) {
        if(err){
            return res.status(500).send("server error.")
        }
        res.render('show.html',{students:students});
    });
});

module.exports = router;