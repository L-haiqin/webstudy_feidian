// ——————————————————————————————db.json文件的方式对数据进行增删查改——————————————————————————————

// var fs = require('fs');
// var dbPath = './db.json';
//
// // 查找学生所有信息
// exports.find = function (callback) {
//     fs.readFile(dbPath,'utf8',function (err,data) {
//         if(err){
//             return callback(err);
//         }
//         callback(null,JSON.parse(data).students);
//     })
// };
//
// // 增加学生信息
// exports.save = function (student,callback) {
//     fs.readFile(dbPath,'utf8',function (err,data) {
//         if(err){
//             return callback(err);
//         }
//
//         var students = JSON.parse(data).students;
//
//         student.id = students[students.length - 1].id +1;
//
//         students.push(student);
//
//         var fileData = JSON.stringify({
//             students:students
//         });
//
//         fs.writeFile(dbPath,fileData,function (err) {
//             if(err){
//                 return callback(err);
//             }
//             // 成功就没有错误
//             callback(null);
//         });
//     })
// };

// ———————————————————————————————————分割线——————————————————————————————————
// MongoDB数据库
// 参考mongoose官方文档
// https://mongoosejs.com/docs/api/model.html#model_Model.findById

var mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/itcast');

var Schema = mongoose.Schema;

// 设计文档结构，即表结构
var studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type: Number,
        required: true
    }
});

module.exports =  mongoose.model('Student',studentSchema);