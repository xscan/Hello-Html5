// websql数据库采用sqlite
// 网页生成的数据库文件我的在
// C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Profile 1\databases
// 具体
// 创建数据库
var dataBase = openDatabase("student", "1.0", "学生表", 1024 * 1024, function () { });
if (!dataBase) {
    document.write("数据库创建失败！\n");
} else {
    document.write("数据库创建成功！\n");
}
//创建数据表
  dataBase.transaction( function(tx) { 
    tx.executeSql(
        "create table if not exists stu (id REAL UNIQUE, name TEXT)", 
        [], 
        function(tx,result){ document.write('创建stu表成功<br>'); }, 
        function(tx, error){ document.write('创建stu表失败:' + error.message+'<br>'); 
    });
 });
// 下面是增删改查
    dataBase.transaction(function (tx) {
            tx.executeSql(
	        "insert into stu (id, name) values(?, ?)",
	        ['5', '小测'],
	        function () { 
	        	document.write('添加数据成功<br>');
	        },
	        function (tx, error) {
	            document.write('添加数据失败: ' + error.message+'<br>');
	        });
    });
  dataBase.transaction(function(tx){
  	tx.executeSql(
  		"delete from stu where id=?",
  		['3'],
  		function(tx,result){
  			console.log(result);
  		},
  		function(tx,error){
  			console.log(error);
  		}
  		);
  });
    dataBase.transaction(function(tx){
  	tx.executeSql(
  		"update stu set name='小改' where id=?",
  		['5'],
  		function(tx,result){
  			if(result.rowsAffected==1){
  				document.write('id=5;修改数据成功<br>')
  			}
  			console.log(result);
  		},
  		function(tx,error){
  			  document.write('修改数据失败: ' + error.message+'<br>');
  		}
  		);
  });
  dataBase.transaction(function(tx){
  	tx.executeSql(
  		"select * from stu",
  		[],
  		function(tx,result){
  			console.log(result);
  			for (var i =0; i <= result.rows.length; i++) {
  				document.write('id='+result.rows.item(i)['id']+'\t name='+result.rows.item(i)['name']+'<br>');
  			};
  		
  			
  		},
  		function(tx,error){
  			console.log(error);
  		}
  		);
  });

//删除数据表
  dataBase.transaction(function(tx){
  	tx.executeSql(
  		"drop table stu",
  		[],
  		function(tx,result){
  			document.write('删除数据表成功');
  		},
  		function(tx,error){
  			console.log(error);
  		}
  		);
  });
  
// 具体查看https://developer.mozilla.org/zh-CN/
