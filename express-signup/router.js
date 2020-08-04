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

    new Student(req.body).save(function (err) {
        if(err){
            return res.status(500).send("server error.")
        }
        res.redirect('/show');
    });

    // Student.save(req.body,function (err) {
    //     if(err){
    //         return res.status(500).send("server error.")
    //     }
    //     res.redirect('/show');
    // });

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

// 渲染修改学生页面
router.get('/edit',function (req,res) {
    Student.findById(req.query.id.replace(/"/g,''),function (err,student) {
        if(err){
            return res.status(500).send("server error.")
        }
        // console.log(student); // 打印根据ID查找的学生对象
        res.render('edit.html', {
            student: student
        })
    })

    // console.log(req.body.id)
});

// 修改学生信息操作
router.post('/edit',function (req,res) {
    Student.findByIdAndUpdate(req.body.id.replace(/"/g,''),req.body,function (err) {
        if(err){
            return res.status(500).send("server error.")
        }
        res.redirect('/show')
    })
});

// 删除学生信息
router.get('/delete',function (req,res) {
    Student.findByIdAndRemove(req.query.id.replace(/"/g,''),function (err) {
        if(err){
            return res.status(500).send("server error.");
        }
        // alert('删除成功');
        res.redirect('/show');
    })
});

module.exports = router;