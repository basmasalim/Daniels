// change color Navbar
let navRef = document.querySelector('nav');

document.addEventListener('scroll', () => {
  if (window.scrollY > 650) {
    navRef.classList.add('scrolled');
  } else {
    navRef.classList.remove('scrolled');
  }
}, { passive: true })


//spinner-wrapper
const spinnerWrapperEL = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
  spinnerWrapperEL.style.opacity = '0';
});

setTimeout(() => {
  spinnerWrapperEL.style.display = 'none';
}, 2500);


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
  }, 3000 / goal);
}



