// var tpl = 'Hei, my name is <%name%>, and I\'m <%age%> years old.';

// var data = {
//     "name": "Barret Lee",
//     "age": "20"
// };
 
// var result = tpl.replace(/<%([^%>]+)?%>/g, function(s0, s1){
//     return data[s1];
// })
// document.write(result)

var tpl = " <div class='box'><img src=<%url%> alt='' width='200px' height='200px'> <div class='img-text'> <%text%> </div> </div>";

var data = {
    "url": "1.jpg",
    "text": "你好"
};
 
var result = tpl.replace(/<%([^%>]+)?%>/g, function(s0, s1){
    return data[s1];
})
for (var i = 5; i >= 0; i--) {
	document.write(result)
};

