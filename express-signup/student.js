var fs = require('fs');
var dbPath = './db.json';

// 查找学生所有信息
exports.find = function (callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            return callback(err);
        }
        callback(null,JSON.parse(data).students);
    })
};

// 增加学生信息
exports.save = function (student,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            return callback(err);
        }

        var students = JSON.parse(data).students;

        student.id = students[students.length - 1].id +1;

        students.push(student);

        var fileData = JSON.stringify({
            students:students
        });

        fs.writeFile(dbPath,fileData,function (err) {
            if(err){
                return callback(err);
            }
            // 成功就没有错误
            callback(null);
        });
    })
};