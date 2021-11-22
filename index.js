
// Nav
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expended", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expended", false);
    }
    
    console.log(visiblity);
})


// Carousel
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');
const carouselWidth = document.querySelector('.carousel-container').offsetWidth;

next.addEventListener('click', () => {
    console.log("Click");
    track.style.transform = `translateX(-${carouselWidth}px)`;
})

prev.addEventListener('click', () => {
    track.style.transform = `translateX(-${0}px)`;
})


// Sticky NavBar

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// //Start the hero section right after sticky navbar
// const navHeight = document.getElementById('navbar').offsetHeight;
// const hero = document.querySelector('.hero');

// hero.style.marginTop = `${navHeight}px`;