// 严格模式
'use strict';
// 导入express包
const express=require('express');
// 导入path包
const path = require('path');
const bodyParser = require('body-parser');
// 设置端口
let port=process.env.PORT || 3000;
// 启动一个web服务器
let app=express();
// 设置视图的根目录
app.set('views', './views/pages');
// 设置默认的模板引擎
app.set('view engine','jade');
// 将表单数据格式化
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// 设置静态路由
app.use(express.static(path.join(__dirname,'bower_components')));
// 监听端口
app.listen(port);
// 打印日志信息
console.log('Jijmin started on port '+port);

// 配置路由
// index page
app.get('/',function(req,res){
	res.render('index',{
		title:'Jijmin 首页',
		movies:[
			{
				title:'机械战警',
				_id:1,
				poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				title:'机械战警',
				_id:2,
				poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				title:'机械战警',
				_id:3,
				poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				title:'机械战警',
				_id:4,
				poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				title:'机械战警',
				_id:5,
				poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},
			{
				title:'机械战警',
				_id:6,
				poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}
		]
	})
});
// detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'Jijmin 详情页',
		movie:{
			director:'何塞·帕迪里亚',
			country:'美国',
			title:'机械战警',
			year:2014,
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'翻拍自1978年同名科幻经典、由《精英部队》导演何塞·帕迪里亚执导的新版《机械战警》发布首款预告片。大热美剧《谋杀》男星乔尔·金纳曼化身新“机械战警”酷黑战甲亮相，加里·奥德曼、塞缪尔·杰克逊、迈克尔·基顿三大戏骨绿叶护航。'
		}
	})
});
// admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'Jijmin 后台录入页',
		movie:{
			title:'',
			director:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	})
});
// list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'Jijmin 列表页',
		movies:[
			{
			title:'机械战警',
			_id:1,
			director:'何塞·帕迪里亚',
			country:'美国',
			year:2014,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'翻拍自1978年同名科幻经典、由《精英部队》导演何塞·帕迪里亚执导的新版《机械战警》发布首款预告片。大热美剧《谋杀》男星乔尔·金纳曼化身新“机械战警”酷黑战甲亮相，加里·奥德曼、塞缪尔·杰克逊、迈克尔·基顿三大戏骨绿叶护航。'
			}
		]
	})
});