var version = 2;
var curr = version;

window.onload = function() {
	for (var i = curr - 1; i >= 1; i--) {
		document.getElementById(getArticleID(i)).style.display = "none";
	}
}

function next_article () {
	next = curr - 1;
	if (next >= 1){
		document.getElementById(getArticleID(next)).style.display = "block";
		var img = new Image();
		img.src = 'images/line_breaker.jpg';
		img.id = "line_breaker";
		document.getElementById(getArticleID(curr)).appendChild(img);
		curr--;
		if (curr === 1) {
			document.getElementById("down").style.display = "none";
		}
	}
}

function getArticleID(num) {
	return "post-" + num;
}