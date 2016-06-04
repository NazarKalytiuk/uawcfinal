document.getElementById('l-1').onclick = function(){
	check(1);
};
document.getElementById('l-2').onclick = function(){
	check(2);
};
document.getElementById('l-3').onclick = function(){
	check(3);
};

function check(id){
	document.getElementById('i-'+id).checked = true;
	for (var i = document.getElementsByClassName('tab').length - 1; i >= 0; i--) {
		removeClass(document.getElementsByClassName('tab')[i], 'active');
	}
	document.getElementById('tab-'+id).classList.add("active");
}
function removeClass(obj, cls) {
	var classes = obj.className.split(' ');

	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == cls) {
			classes.splice(i, 1);
			i--;
		}
	}
	obj.className = classes.join(' ');
}