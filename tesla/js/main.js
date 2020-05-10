$(function () {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true
    });

});

let menuBtnOpen = document.querySelector('.header__menu');
let menuBtnClose = document.querySelector('.menu-close');
let menu = document.querySelector('.menu');
let menuLinks = document.querySelectorAll('.menu__link');



menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuLinks.forEach((item) => {
    item.addEventListener('click', menuLinkActivator);
})


function toggleMenu() {
    menu.classList.toggle("open-menu");
}


function menuLinkActivator() {
    menuLinks.forEach((item) => {
        item.classList.remove('menu__link--activ');
    })
    this.classList.add('menu__link--activ');

}

