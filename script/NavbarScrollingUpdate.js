
 // JavaScript to make the navbar fixed on scroll
 window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("fixed-navbar");
    } else {
        navbar.classList.remove("fixed-navbar");
    }
});
``