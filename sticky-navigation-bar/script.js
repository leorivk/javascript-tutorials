const nav = document.querySelector("nav");
const title = document.querySelector(".nav__title h1");
const menu = document.querySelectorAll(".nav__menu li");

const navHandler = () => {
    if (window.scrollY <= 10) {
        nav.style.background = "rgba(0, 0, 0, 0)";
        title.style.color = "white";
        for (i=0; i<menu.length; i++) {
            menu[i].children[0].style.color = "white";
        }
        nav.classList.add("nav__top")
    } else {
        nav.style.background = "white";
        title.style.color = "rgba(0, 0, 0, 0.7)";
        for (i=0; i<menu.length; i++) {
            menu[i].children[0].style.color = "rgba(0, 0, 0, 0.7)";
        }
        nav.classList.remove("nav__top");
    }
}

window.addEventListener("scroll", navHandler);