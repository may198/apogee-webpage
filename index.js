
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
    track.style.transform = `translateX(-${carouselWidth}rem)`;
})

prev.addEventListener('click', () => {
    track.style.transform = `translateX(-${0}rem)`;
})


// Sticky NavBar

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Start the hero section right after sticky navbar
const navHeight = document.getElementById('navbar').offsetHeight;
const hero = document.querySelector('.hero');

hero.style.marginTop = `${navHeight}px`;