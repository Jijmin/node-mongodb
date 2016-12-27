'use strict';
const mongoose=require('mongoose');
const MovieSchema=require('../schemas/movie');
// 编译生成Movie这个模型
let Movie=mongoose.model('Movie',MovieSchema);
// 将构造函数导出
module.exports=Movie;