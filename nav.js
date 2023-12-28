var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
 

var currentScrollPos = window.pageYOffset;
 /* if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0px";
  } 
  */
  //else if ((x.matches) && (clicked==false)) {
    //else 

  
  prevScrollpos = currentScrollPos;
};






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
        changeStyle();

       
        
        
       

    });

}

navSlide();


var changeStyles = 0;
function changeStyle() {
//function defination
var el = document.getElementById('burger-nav');
if (el.classList.contains("cool")){

changeStyles = 1;
}
else {
  changeStyles = 0;
}

if (changeStyles == 1){
   // document.getElementById("nav").style.top = "-150px";
    document.getElementById("nav").style.position = "fixed";
    document.getElementsByTagName("body")[0].style.marginTop = "90px";
    }
    else if(changeStyles == 0){
        document.getElementById("nav").style.removeProperty('position');
        document.getElementsByTagName("body")[0].style.marginTop = "0px";
    }

}


 
