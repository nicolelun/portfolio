var activeBtn = "none";
var activeClass = "none";
var allProj = document.querySelectorAll(".tile");
var filters = [
    {
        btnId: "#video-btn",
        tileClass: ".video",
    },
    {
        btnId: "#video-btn-s",
        tileClass: ".video",
    },
    {
        btnId: "#photo-btn",
        tileClass: ".photo",
    },
    {
        btnId: "#photo-btn-s",
        tileClass: ".photo",
    },
    {
        btnId: "#web-btn",
        tileClass: ".web",
    },
    {
        btnId: "#web-btn-s",
        tileClass: ".web",
    },
    {
        btnId: "#print-btn",
        tileClass: ".print",
    },
    {
        btnId: "#print-btn-s",
        tileClass: ".print",
    },
    {
        btnId: "#other-btn",
        tileClass: ".other",
    },
    {
        btnId: "#other-btn-s",
        tileClass: ".other",
    }
]

function tintAll() {
	$(".tile").addClass("tint");
    $(".tile").find("img").addClass("grayscale");

    // hide the tile header
    $(".tile").find(".tile-header").css("visibility", "hidden");
}
        
// function showFilterIcon() {
//     var x = document.getElementById("filter-container-s");
//     if (x.className.indexOf("w3-show") == -1) {
//         x.className += " w3-show";
//     } else { 
//         x.className = x.className.replace(" w3-show", "");
//     }
// }

function showFilterIcon() {
    $("#filter-small").toggleClass("w3-show");
}

function toggleFilter(btnId, tileClass) {

	var btn = btnId;
	var tile = tileClass;

    // console.log(btnId);
    // console.log(tile);

    // if the active button is the current button
    if (btn == activeBtn) {

    	// hide the tiles for the current button
    	$(tile).addClass("tint");
        $(tile).find("img").addClass("grayscale");

        // hide the tile header
        $(tile).find(".tile-header").css("visibility", "hidden");

        // remove the active color from the old active button
        // $(activeBtn).toggleClass("w3-text-orange");
        $(activeBtn).removeClass("w3-text-orange");
        $(activeBtn).addClass("w3-text-light-grey");
        // console.log(activeBtn);

		// reset the active button to undefined
        activeBtn = "none";
    } 

    // if the active button is NOT the current button
    else {

    	// scroll down to the first tile for the current button
		var offset = $(tileClass).offset();
		var newOffset = offset.top - 122;

	    $('html, body').animate({
	        scrollTop: newOffset
	    }, 500);

    	// reveal the tiles for the current button
		$(tile).removeClass("tint");
        $(tile).find("img").removeClass("grayscale");

        // reveal the tile header
        $(tile).find(".tile-header").css("visibility", "visible");

        // remove the active color from the old active button
        // $(activeBtn).toggleClass("w3-text-orange");
        $(activeBtn).removeClass("w3-text-orange");
        $(activeBtn).addClass("w3-text-light-grey");
        // console.log(activeBtn);

        // reset the active button to be the current button
   		activeBtn = btn;
   		activeClass = tile;

        // add color to the current active button
        $(activeBtn).removeClass("w3-text-light-grey");
        $(activeBtn).addClass("w3-text-orange");

    }
       
	// console.log(activeBtn);
}

function checkPage(btnId, tileClass) {
    if(!$('body').hasClass('index')){
        window.location.href = 'index.html?btnId=' + btnId + '&tileClass=' + tileClass;
    } 
};

// On document load
$(document).ready(function() {

    // Check if current page is index page
    if($('body').hasClass('index')){

        // Parse the URL for passed variables
        var vars = [], hash;
        var q = document.URL.split('?')[1];
        if (q != undefined) {
            q = q.split('&');
            for (var i = 0; i < q.length; i++) {
                hash = q[i].split('=');
                vars.push(hash[1]);
                vars[hash[0]] = hash[1];
            }
            // console.log(vars['btnId']);
            // console.log(vars['tileClass']);

            toggleFilter(vars['btnId'], vars['tileClass']);
        }

        // Fix header to top of page
        // $('header').addClass('w3-top');
    }
});

// On document load
$(document).ready(function(){

    // On click of filter button
    $('.filter-btn').click(function(){

        // Find ID of clicked button
        var btnId = "#" + $(this).attr("id");
        // console.log("this ID: " + btnId);

        // Find tile class associated with ID of clicked button
        for (var i = 0; i < filters.length; i++) {
            
            if (filters[i].btnId === btnId) {
                var tileClass = filters[i].tileClass;
                // console.log("class: " + tileClass);
            }
        }

        // Navigate to index page if not already there
        checkPage(btnId, tileClass);

        // Tint all tiles
        tintAll();

        // Reveal/tint tiles based on clicked button
        toggleFilter(btnId, tileClass);

        // Hide icon for small filter
        if (btnId.endsWith("-s")) {
            // var x = $("#filter-container-s");
            var x = $("#filter-small");
            x.removeClass("w3-show");
        }

    });

 //    $("#video-btn").click(function(){
 //        checkPage("#video-btn", ".video");
 //        tintAll();
 //        toggleFilter("#video-btn", ".video");
 //    });

	// $("#video-btn-s").click(function(){
 //        tintAll();
 //        toggleFilter("#video-btn-s", ".video");
 //        showFilterIcon();
 //    });

 //    $("#photo-btn").click(function(){
 //        tintAll();
 //        toggleFilter("#photo-btn", ".photo");
 //    });

 //    $("#photo-btn-s").click(function(){
 //        tintAll();
 //        toggleFilter("#photo-btn-s", ".photo");
 //        showFilterIcon();
 //    });

 //    $("#web-btn").click(function(){
 //        tintAll();
 //        toggleFilter("#web-btn", ".web");
 //    });

 //    $("#web-btn-s").click(function(){
 //        tintAll();
 //        toggleFilter("#web-btn-s", ".web");
 //        showFilterIcon();
 //    });

 //    $("#print-btn").click(function(){
 //        tintAll();
 //        toggleFilter("#print-btn", ".print");
 //    });

 //    $("#print-btn-s").click(function(){
 //        tintAll();
 //        toggleFilter("#print-btn-s", ".print");
 //        showFilterIcon();
 //    });

 //    $("#book-btn").click(function(){
 //        tintAll();
 //        toggleFilter("#book-btn", ".book");
 //    });

 //     $("#book-btn-s").click(function(){
 //        tintAll();
 //        toggleFilter("#book-btn-s", ".book");
 //        showFilterIcon();
 //    });

 //    $("#other-btn").click(function(){
 //        tintAll();
 //        toggleFilter("#other-btn", ".other");
 //    });

 //     $("#other-btn-s").click(function(){
 //        tintAll();
 //        toggleFilter("#other-btn-s", ".other");
 //        showFilterIcon();
 //    });
});

$(document).ready(function(){

    $(".tile").mouseenter(function(){
        $(this).children("img").removeClass("grayscale");
        $(this).children(".tile-header").css("visibility", "visible");
    });

  	$(".tile").mouseleave(function(){
    	 
    	if (activeBtn.startsWith("#video-btn") == true) {
	    	// if ($(this).hasClass("video") == false ) {
	    	// 	$(this).children("img").addClass("grayscale");
	    	// }
	    	$("div").not(".video").children("img").addClass("grayscale");
        	$("div").not(".video").children(".tile-header").css("visibility", "hidden");
    	} 
    	else if (activeBtn.startsWith("#photo-btn") == true) {
	    	$("div").not(".photo").children("img").addClass("grayscale");
	    	$("div").not(".photo").children(".tile-header").css("visibility", "hidden");
    	}
    	else if (activeBtn.startsWith("#web-btn") == true) {
	    	$("div").not(".web").children("img").addClass("grayscale");
	    	$("div").not(".web").children(".tile-header").css("visibility", "hidden");
    	}
    	else if (activeBtn.startsWith("#print-btn") == true) {
	    	$("div").not(".print").children("img").addClass("grayscale")
	    	$("div").not(".print").children(".tile-header").css("visibility", "hidden");;
    	}
    	else if (activeBtn.startsWith("#book-btn") == true) {
	    	$("div").not(".book").children("img").addClass("grayscale");
	    	$("div").not(".book").children(".tile-header").css("visibility", "hidden");
    	}
    	else if (activeBtn.startsWith("#other-btn") == true) {
	    	$("div").not(".other").children("img").addClass("grayscale");
	    	$("div").not(".other").children(".tile-header").css("visibility", "hidden");
    	}
    	else {
    		$(this).children("img").addClass("grayscale");
    		$(this).children(".tile-header").css("visibility", "hidden");
    	}

    });

});

