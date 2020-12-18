const navbar = document.querySelector(".navbar");
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("scrolled");
        navbar.classList.remove("fixed-top");
    }
};
