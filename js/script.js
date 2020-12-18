// Google Form Redirect
// eslint-disable-next-line
var submitted = false;

// Google Form Submit Text Confirmation
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const subscribed = urlParams.get("subscribed");

if (subscribed == "true") {
    var element = document.getElementById("email-subscribed");
    element.classList.add("d-block");
}

// Navbar Background
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
