/*
 * function that manages that show the proper slide 
 */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    /*
     *  display "none" on on all slide img (only one slide img have display "block")
     */
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    /*
     *  remove "active" class on all dot (only one dot have "active" class)
     */
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*
 * increments the slideIndex by n
 */
function plusSlides(n) {
    showSlides((slideIndex += n));
}

/*
 * openNav closes the sidebar.
 */
function currentSlide(n) {
    showSlides((slideIndex = n));
}

/*
 * starts at slideIndex 1
 */
var slideIndex = 1;
/*
 * show slide at current slideIndex
 */
showSlides(slideIndex);


