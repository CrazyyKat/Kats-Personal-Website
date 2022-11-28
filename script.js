let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndexKWK = 1;
showSlidesKWK(slideIndexKWK);

// Next/previous controls
function plusSlidesKWK(k) {
  showSlidesKWK(slideIndexKWK += k);
}

// Thumbnail image controls
function currentSlideKWK(k) {
  showSlidesKWK(slideIndexKWK = k);
}


function showSlidesKWK(k) {
  let j;
  let slidesKWK = document.getElementsByClassName("kwk-mySlides");
  let dotsKWK = document.getElementsByClassName("dot");
  if (k > slides.length) {slideIndexKWK = 1}
  if (k < 1) {slideIndexKWK = slides.length}
  for (j = 0; j < slidesKWK.length; j++) {
    slides[j].style.display = "none";
  }
  for (j = 0; j < dotsKWK.length; j++) {
    dotsKWK[j].className = dotsKWK[j].className.replace(" active", "");
  }
  slides[slideIndexKWK-1].style.display = "block";
  dots[slideIndexKWK-1].className += " active";
}


// BUTTON


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}