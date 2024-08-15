// boton del menu mobile
const menuBtn = document.getElementById("mobile-menu-btn");
const menuMobile = document.querySelector(".mobile-menu");

const menuItems = document.querySelectorAll(".mobile-item__anchor");

let menuHeight = 0;

// calcular altura del menu
const calcHeightMenu = () => {
    menuItems.forEach((item) => {
        menuHeight += item.offsetHeight;
    });

    return menuHeight;
};

console.log(menuHeight);

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("mobile-control__btn--clicked");

    if (!menuBtn.classList.contains("mobile-control__btn--clicked")) {
        menuHeight = 0;
    } else {
        menuHeight = calcHeightMenu();
    }

    menuMobile.style.height = `${menuHeight}px`;
});
