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
