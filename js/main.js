//spinner-wrapper
const spinnerWrapperEL = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
  spinnerWrapperEL.style.opacity = '0';
});

setTimeout(() => {
  spinnerWrapperEL.style.display = 'none';
}, 2500);

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})

// change color Navbar
document.addEventListener('scroll', () => {
  var nav  =document.querySelector('nav');
  if (window.scrollY > 780){
      nav.classList.add("scrolled");
  }
  else{
      nav.classList.remove("scrolled"); 
  }
})

  // type js
$(document).ready(function () {
  var typed = new Typed("#typed", {
    strings: ["Larry Daniels", "Developer", "Designer"],
    backSpeed: 100,
    typeSpeed: 100,
    loop: true,
    cursorChar: "|",
  });
});

//Owl Carousel 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      autoplayTimeout: 3000,
      mouseDrag: true,
  
    });
  });

//counter
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".row");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2500 / goal);
}



