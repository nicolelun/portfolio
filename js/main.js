$(document).ready(function() {
	$("button.top").click(function() {
	  	$("body").animate({
	    	scrollTop: 0
	  	}, 600);
	});
});

function screenWidth() {
	console.log(window.innerWidth);
}

$(document).ready(function() {
    var caseList = [
    'window.html',
    'light-installation.html',
    'globe.html',
    'soundscapes.html',
    'waiting.html',
    'look.html',
    'dump.html',
    'odyssey.html',
    'desk.html',
    'labyrinth.html',
    'triptych.html',
    // 'lawndale.html',
    'bags.html',
    'siphon.html',
    'meal.html',
    'box.html',
    'bottle.html',
    'wagashi.html',
    'nssmusa.html',
    'mcs.html',
    'street.html',
    'yangtze.html',
    'landscape.html',
    'still.html',
    'abstract.html',
	];

    current = $(location).attr('pathname').substr($(location).attr('pathname').lastIndexOf("/")+1); // get current page: just last part - page name and extension
    if ($.inArray(current, caseList) !== -1) { //check if it is in array
        index = $.inArray(current, caseList);
        // console.log(current);
        // console.log(index);
    }

    //navigate through pages...
    $("button.next").click(function() {
	    if (index < caseList.length - 1) {
	    	next = caseList[index + 1];
        } else {
            next = caseList[0];
        }
    	window.location.href = next;
    });

    $("button.prev").click(function() {
    	if (index > 0) {
	    	prev = caseList[index - 1];
        } else {
            prev = caseList[caseList.length - 1];
        }
    	window.location.href = prev;
    });

});
