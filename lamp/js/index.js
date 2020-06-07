document.addEventListener("DOMContentLoaded", () => {
    // const mobileNav = document.querySelector('.mobile-nav');
    const headerNav = document.querySelector('.header__nav');

    document.addEventListener('click', (e) =>{

        if(e.target.classList.contains('mobile-nav') && !headerNav.classList.contains('enable')){
            headerNav.classList.add('enable');
        }else if(!e.target.closest('.header__nav')){
            headerNav.classList.remove('enable');
        }

    })


})