// SLIDESHOW JAVASCRIPT

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

// END OF SLIDESHOW JAVASCRIPT

function stemSistersInfo() {
  alert("STEM Sisters is a club that I started at my high school in 2019 to encourage more girls to get invovled in STEM! This slideshow features pictures from some of our club meetings, events, and a Girls in STEM Day we held to teach 25 elementary and middle school girls about STEM.")
}

function KWKInstructorInfo() {
  alert("In the summer of 2022, I worked as an Instructor Assistant at Kode With Klossy's Web Development Camp in SF! I taught female students how to build their own websites in less than 2 weeks, facilitated games and brain breaks, and spearheaded sessions discussing the culture of technology.")
}

function KWKScholarInfo() {
  alert("During the summers of 2019, 2020, and 2021, I was accepted into Kode With Klossy's two week intensives focused on Web Development, Mobile Development, and Data Science. The following links lead to my final projects from each camp that were created using the languages and platforms featured in each camp curriculum.")
}

function technovationInfo() {
  alert("As a part of Technovation Girls, I worked with a group of friends to create an app focusing on improving and upkeeping positive mental health in students. Our app, Meliora, was recognized as a Semifinalist in the competition, scoring within the top 10% of submissions.")
}