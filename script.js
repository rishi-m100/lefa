var left=document.getElementsByClassName("left");
var right=document.getElementsByClassName("right");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" alive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " alive";
}
var slideIndex = 0;
autoSlides();

function autoSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" alive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " alive";
  timer=setTimeout(autoSlides, 4000);
  timer; // Change image every 2 seconds
  left[0].addEventListener("click", function() {
  clearInterval(timer);
});
right[0].addEventListener("click", function() {
  clearInterval(timer);
});

}



//Number Animation

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj1 = document.getElementById("value1");
const obj2 = document.getElementById("value2");
/*const obj3 = document.getElementById("value3");
const obj4 = document.getElementById("value4");
const obj5 = document.getElementById("value5");
const obj6 = document.getElementById("value6");
const obj7 = document.getElementById("value7");
*/



function isInViewport(element) {
    var element = document.getElementById('value1');

    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

}
    var element = document.getElementById('value1');
    var condition = isInViewport();
    var count = 0;

function animateNumbers() {

if (isInViewport()==true) {
  if (count== 0) {
animateValue(obj1, 0, 4, 2000);
animateValue(obj2, 0, 84, 3000);
//animateValue(obj3, 0, 64, 2500);

  }
count=1;
}
}
document.getElementById('all').addEventListener("mousemove", animateNumbers);
document.getElementById('all').addEventListener("wheel", animateNumbers);



//



function isInViewport2(element2) {
    var element2 = document.getElementById('value4');

    const rect = element2.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

}
    var element2 = document.getElementById('value4');
    var condition2 = isInViewport();
    var count2 = 0;

function animateNumbers2() {

if (isInViewport2()==true) {
  if (count2== 0) {
animateValue(obj4, 0, 6, 2000);
animateValue(obj5, 0, 70, 3000);
animateValue(obj6, 0, 3, 2000);
animateValue(obj7, 0, 14, 2500);
  }
count2=1;
}
}
document.getElementById('all').addEventListener("mousemove", animateNumbers2);
document.getElementById('all').addEventListener("wheel", animateNumbers2);

