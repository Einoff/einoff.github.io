document.addEventListener("DOMContentLoaded", () => {

    //header slideshow 
    headerSlideshow();

    // fixedTopWithScroll 
    fixedTopWithScroll('.header-top', 'header-top-scroll', 'header-top__hide');

    // hide fixedTopWithScroll
    hideFixedHeaderTop('.header-top', '.header-top__hide-btn', 'header-top__hide');

    // to top arrow button
    toTopArrowButton('.top-arrow-button', 'display-none');

    headerNavigationScroll();

    //mobile navigation top header
    mobileNavHandler();

    //number animation and animation trigger
    
    numberAnimationTrgger('.facts')

    // number animation triger
    function numberAnimationTrgger(targetTriger){
        const $targetTrigger = document.querySelector(targetTriger);
        let NothasBeenActivated = true;

       
        window.addEventListener('scroll', () => {

                if(NothasBeenActivated & $targetTrigger.getBoundingClientRect().y <= 100){

                    NothasBeenActivated = false;
                    
                    numberAnimation('.js-item-num-1', 80, 100, 30);
                    numberAnimation('.js-item-num-2', 120, 150, 30);
                    numberAnimation('.js-item-num-3', 460, 500, 30);
                    numberAnimation('.js-item-num-4', 650, 700, 30);
                
                }
        })
        
      
    }
    //number animation
    function numberAnimation(el, minNum, maxNum, delay){
        const $el = document.querySelector(el);
        let count = minNum;
        numUp();
        function numUp(){
            setTimeout(() =>{ 
                $el.innerHTML = count;
                count++;
                if(count <= maxNum){
                    numUp();
                }
            }, delay)
        }
       

        // for(let i = 1; i <= maxNum; i++){
        //     $el.innerHTML = i;
        //     setTimeout(() =>{
        //     }, 1000)
        //     console.log(i);
        // }
    }


    //header slideshow 
    function headerSlideshow() {

        const headerSlides = document.querySelectorAll('.js-header-slides');
        let currentSlide = 0;

        rotationSlides();
        function rotationSlides() {
            let randX = Math.floor(1 + Math.random() * (10 + 1 - 1));
            let randY = Math.floor(1 + Math.random() * (10 + 1 - 1));

            headerSlides[currentSlide].style.transformOrigin = `${randX}0% ${randY}0%`;
            headerSlides[currentSlide].classList.add('header__slideshow-item--active');

            setTimeout(() => {
                if (currentSlide < headerSlides.length - 1) {
                    headerSlides[currentSlide].classList.remove('header__slideshow-item--active');
                    currentSlide++;
                }
                else {
                    headerSlides[currentSlide].classList.remove('header__slideshow-item--active');
                    currentSlide = 0;
                }
                rotationSlides();
            }, 8000)
        }
    }

    // fixedTopWithScroll
    function fixedTopWithScroll(el, activator, hideBtnActivator) {

        const $el = document.querySelector(el);
        const headerTopHideBtn = $el.querySelector('.header-top__hide-btn');

        window.addEventListener('scroll', scrollHandler);

        scrollHandler();

        function scrollHandler() {

            if (window.pageYOffset > 10) {
                $el.classList.add(activator);
                headerTopHideBtn.style.display = 'block';
            } else {
                $el.classList.remove(activator);
                $el.classList.remove(hideBtnActivator);
                headerTopHideBtn.style.display = 'none';
            }
        }
    }

    // hide fixedTopWithScroll
    function hideFixedHeaderTop(el, btn, cActivator) {

        const headerTopHideBtn = document.querySelector(btn);
        const headerTop = document.querySelector(el);

        headerTopHideBtn.addEventListener('click', headerTopHide);

        function headerTopHide() {
            console.log('hide btn');

            headerTop.classList.toggle(cActivator);
        }
    }

    // init swiper slider "clients section"
    const swiper = new Swiper('.clients__swiper-container', {
        slidesPerView: 4,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        // updateOnWindowResize: true
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            550: {
                slidesPerView: 2
            },
            650: {
                slidesPerView: 3
            },
            900: {
                slidesPerView: 4
            }

        }
    });

    // init swiper slider "customer section"
    const customerSwiper = new Swiper('.customers__swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });

    // to top arrow button
    function toTopArrowButton(cBtn, cActivator) {

        const Btn = document.querySelector(cBtn);
        const heightView = window.innerHeight;

        Btn.addEventListener('click', clickHandler);
        window.addEventListener('scroll', isTop);

        function isTop() {
            if (window.pageYOffset > heightView) {
                Btn.classList.remove('display-none');
            } else {
                Btn.classList.add('display-none');

            }
        }

        function clickHandler() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    //scroll to section (header menu)
    function headerNavigationScroll() {
        const header = document.querySelector('.header');
        header.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.id) {
                const targetClass = '.' + e.target.id;
                const targetPosition = document.querySelector(targetClass).getBoundingClientRect().y + window.pageYOffset;
                if (targetPosition) {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                }
                console.log(targetPosition);
                console.log(window.pageYOffset);

            }


        })
    }

    //mobile navigation top header
    function mobileNavHandler() {
        const navMenu = document.querySelector('.header-top__nav');
        document.addEventListener('click', (e) => {

            if (e.target.classList.contains('js-nav-mobile-btn')) {
                navMenu.classList.add('enable');
            } else if (!e.target.closest('.header-top__nav')) {
                navMenu.classList.remove('enable');
            }

        });
    }

    //  WOWjs init
    new WOW().init();


    ////////////below not walk it is dangerous//////////////////////////////////////////////////////////

    // project gallery
    const prodjectGallery = document.querySelectorAll('.projects__swiper-item');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal__img');
    const GalleryImgAll = document.querySelectorAll('.js-gallery-img');
    let currentImgOpen;


    prodjectGallery.forEach(function (item) {
        item.addEventListener('click', prodjectGalleryHandler);
    })

    // Open modal
    function prodjectGalleryHandler(e) {

        let prodjectGalleryImg = this.querySelector('.js-gallery-img').getAttribute('src');
        modalImg.setAttribute('src', prodjectGalleryImg);
        modal.classList.remove('modal__disable');
        currentImgOpen = this.querySelector('.js-gallery-img');
    }

    //  ModalController (close, nav) 
    modal.addEventListener('click', modalController);

    function modalController(e) {
        closeModal(e);
        navModal(e);
    }

    // Close modal
    function closeModal(e) {
        if (e.target.classList.contains('modal') || e.target.closest('.modal__close')) {
            modal.classList.add('modal__disable');
        }
    }

    // nav modal 
    function navModal(e) {

        let prodjectGalleryImg;
        let currentIndex;

        if (e.target.classList.contains('modal__nav-prev')) {
            GalleryImgAll.forEach((item, index) => {
                if (currentImgOpen == item) {
                    if (index == 0) {
                        index = GalleryImgAll.length - 1;
                        prodjectGalleryImg = GalleryImgAll[index].getAttribute('src');
                        modalImg.setAttribute('src', prodjectGalleryImg);
                    }
                    else {
                        prodjectGalleryImg = GalleryImgAll[index - 1].getAttribute('src');
                        modalImg.setAttribute('src', prodjectGalleryImg);
                    }
                    currentIndex = index;
                }
            })
            currentImgOpen = GalleryImgAll[currentIndex - 1];
        }

        if (e.target.classList.contains('modal__nav-next')) {

            GalleryImgAll.forEach((item, index) => {
                if (currentImgOpen === item) {
                    if (index == GalleryImgAll.length - 1) {
                        index = 0;
                        prodjectGalleryImg = GalleryImgAll[index].getAttribute('src');
                        modalImg.setAttribute('src', prodjectGalleryImg);
                    }
                    else {
                        prodjectGalleryImg = GalleryImgAll[index + 1].getAttribute('src');
                        modalImg.setAttribute('src', prodjectGalleryImg);
                    }

                    currentIndex = index;
                }
            })
            currentImgOpen = GalleryImgAll[currentIndex + 1];
        }
    }

});


