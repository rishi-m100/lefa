
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
  setTimeout(autoSlides, 5000); // Change image every 2 seconds
}


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.ani');
    const navLinks = document.querySelectorAll('.menu');




    burger.addEventListener('click', () => {
        //toggle nav

        nav.classList.toggle('nav-active');

    
       

        document.getElementById("menu-toggle").addEventListener("mouseover", function(){
                if (nav.classList.contains('nav-active')) {
                    var x = document.getElementById("ani-toggle");
                    x.style.position = "relative";
                }
                else {
                    var x = document.getElementById("ani-toggle");
                    x.style.removeProperty('position');

                }

            });


        document.getElementById("menu-toggle2").addEventListener("mouseover", function () {
            if (nav.classList.contains('nav-active')) {
                var x = document.getElementById("ani-toggle2");
                x.style.position = "relative";
            }
            else {
                var x = document.getElementById("ani-toggle2");
                x.style.removeProperty('position');

            }

        });

        document.getElementById("menu-toggle3").addEventListener("mouseover", function () {
            if (nav.classList.contains('nav-active')) {
                var x = document.getElementById("ani-toggle3");
                x.style.position = "relative";
            }
            else {
                var x = document.getElementById("ani-toggle3");
                x.style.removeProperty('position');

            }

        });

       
       


        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('cool');

       
        
        
       

    });

}

navSlide();




