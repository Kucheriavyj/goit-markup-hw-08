(() => {
const refs = {
    openMenuBtn: document.querySelector(".mob-nav__icon-open"),
    closeMenuBtn: document.querySelector(".mob-menu__icon-close"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
    };

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
}
})();