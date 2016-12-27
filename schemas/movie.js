'use strict';
const mongoose=require('mongoose');
let MovieSchema=new mongoose.Schema({
	director:String,
  title:String,
  language:String,
  country:String,
  year:Number,
  summary:String,
  flash:String,
  poster:String,
  meta:{
  	// 录入数据或是更新的时候时间的记录
  	createAt:{
  		type:Date,
  		default:Date.now()
  	},
  	//更新的时间
  	updateAt:{
  		type:Date,
  		default:Date.now()
  	}
  }
});
MovieSchema.pre('save',function(next){
	// 判断数据是否是新加的
	if(this.isNew){
		// 将创建时间、更新时间设置为当前时间
		this.meta.createAt=this.meta.updateAt=Date.now();
	}else{
		//更新保存
		this.meta.updateAt=Date.now();
	}
	next();
});
MovieSchame.statics={
  //查询所有的数据
  fetch:function(cb){
    return this
      .find({})// 取出数据库中所有的数据
      .sort('meta.updateAt')//按照更新时间排序
      exec(cb);//执行这个回调方法
  },
  //查询单条的数据
  findById:function(id,cb){
    return this
      .find({_id:id})
      exec(cb);
  }
}
// 将模式导出
module.exports=MovieSchame;