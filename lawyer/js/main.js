// find elements
const menuList = document.querySelector('.header__menu-list');
const mobileBtn = document.querySelector('.header__menu--mobile-btn');

const slider = document.querySelector('.slider');
const sliderNextPrevBtn = document.querySelector('.slider__navigation-previous');
const sliderNextBtn = document.querySelector('.slider__navigation-next');
const headerMenuListDisable =document.querySelector('.header__menu-list--disable');


// subscribe to events
mobileBtn.addEventListener('mouseover', mobileMenuOn);
mobileBtn.addEventListener('mouseleave', mobileMenuOff);
menuList.addEventListener('mouseover', mobileMenuOn);
menuList.addEventListener('mouseleave', mobileMenuOff);

sliderNextPrevBtn.addEventListener('click', sliderNav);
sliderNextBtn.addEventListener('click', sliderNav);


//control mobile menu
function mobileMenuOn(e){
    if(mobileBtn.offsetParent){
        menuList.classList.remove('header__menu-list--disable');
    }
}
function mobileMenuOff(e){
    if(mobileBtn.offsetParent){
        menuList.classList.add('header__menu-list--disable');
    }
    
}

// header slider navigation
function sliderNav(){
    slider.classList.toggle('slider_img2');
}
