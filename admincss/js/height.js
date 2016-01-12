
function navToggle(obj) {
	var el = document.getElementById(obj);
	if ( el.style.display != 'none' ) {
		el.style.display = 'none';
	}
	else {
		el.style.display = '';
	}
}

function resetBowerHeight(){
	var dom=document.getElementById('main');
	var h3=window.innerHeight;
	dom.style.height=h3-38+'px';
}
(function(){
	resetBowerHeight();
})()

window.onresize=function(){
	resetBowerHeight();	
}

