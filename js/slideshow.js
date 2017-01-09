var slideContainer = document.querySelector(".slideshow");
var slides = [];
var numbers = [];
var slideIndex = 1;
var prevBtn;
var nextBtn;
var globalIndex = 1;

showSlide(slideIndex);

// function screenWidth() {
//     console.log(window.innerWidth);
// }

// For left and right buttons
function plusSlides(n) {
    showSlide(slideIndex += n);
}

// For thumbnail navigation
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {

    slides = document.querySelectorAll(".slide-img");

    // If n exceeds the array of main images, then reset n to 1
    if (n > slides.length) {
    	 slideIndex = 1;
    }

    // If n is less than the array of main images, then reset n to the end
    if (n < 1) {
    	 slideIndex = slides.length;
    }

    // Loop through the array of main images and hide them
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide-slide");
    }

    // Loop through the array of thumbnails and replace "active" with null
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }

    // Display one main image
    slides[slideIndex-1].classList.remove("hide-slide");

    // Display the alt as the caption
    // console.log([slides[slideIndex-1].alt]);
    if (slides[slideIndex-1].alt !== undefined) {
        // console.log("hi")
        var caption = document.querySelector(".caption");
        if (caption !== undefined) {
            caption.textContent = slides[slideIndex-1].alt;
        } 
        // captionText.innerHTML = slides[slideIndex-1].alt;
    }

    // Display the slide number
    var slideNum = document.querySelector(".slide-number");
    slideNum.textContent = slideIndex + " / " + (slides.length);

//     // Set one thumbnail to active
//     // dots[slideIndex-1].className += " active";

}