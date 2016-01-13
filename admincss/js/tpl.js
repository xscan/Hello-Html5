var tpl 
// = " <div class='box'><img src=<%url%> alt='' width='200px' height='200px'> <div class='img-text'> <%text%> </div> </div>";
	var tpl='<div class="box">';
	 tpl= '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">';
	  tpl+= '<polygon points="10,1 4,18 19,6 1,6 16,18"';
	   tpl+='style="fill:red;stroke:blue;stroke-width:3;fill-rule:evenodd;" />';
	 tpl+='</svg>';
	 tpl+='</div>';
// var data = {
//     "url": "1.jpg",
//     "text": "你好"
// };
 
// var result = tpl.replace(/<%([^%>]+)?%>/g, function(s0, s1){
//     return data[s1];
// })
var dom=document.getElementById('content');
for (var i = 5; i >= 0; i--) {
	var newNode = document.createElement("div");//创建P标签 
	newNode.className="box";
	newNode.innerHTML = tpl; 
	dom.appendChild(newNode); 
};