$(document).ready(function() {
	$("#top-btn").click(function() {
		console.log("click");
	  	$("body").animate({
	    	scrollTop: 0
	  	}, 800);
	});
});

function screenWidth() {
	console.log(window.innerWidth);
}