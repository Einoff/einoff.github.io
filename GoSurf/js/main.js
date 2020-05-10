// find elements 
const mapSvg = document.querySelector('.map-svg');
const mapTooltip = document.querySelector('.map-tooltip');
const mapTooltipItem = document.querySelectorAll('.map-tooltip__content');

const shopSliderPhotoWrapp = document.querySelector('.shop-slider__photo-wrapp');
const shopSliderPhotoDotsActiv = document.querySelector('#plus-dots');
const shopSliderPhotoDotsText = document.querySelector('.shop-slider__photo-dots-text');

const detailsCounterContainer = document.querySelector('#details-counter-container');
const detailsCounterNightsNum = document.querySelector('.details-counter__nights-num');
const detailsCounterGuestsNum = document.querySelector('.details-counter__guests-num');
const detailsTotalPrice = document.querySelector('.slider-block__details-total-price');

const headerSvgLine = document.querySelectorAll('.header-slider__map-line-anim');
const headerSvgText = document.querySelectorAll('.header-slider__active-text');
const headerSvgDots = document.querySelectorAll('.header-slider__active-dots');
const headerSvgClickArea = document.querySelectorAll('.header-slider__click-area');

const headerSliderPagItem = document.querySelectorAll('.header-slider__pag-item');
const headerSliderPagItemClickArea = document.querySelectorAll('.header-slider__pag-item-click-area');

const headerSliderItem = document.querySelectorAll('.slider-item');
const sliderItemContent = document.querySelectorAll('.slider-item__content');

// variable
let currentMapDots=0;
let currentTooltipItem=0;


// subscribe to events

mapSvg.addEventListener('mouseover', mapTooltipEnable);
mapTooltip.addEventListener('mouseleave', mapTooltipDisable);
shopSliderPhotoWrapp.addEventListener('click', ShopSliderPhotoDotsActiv);
detailsCounterContainer.addEventListener('click', detailsCounterBtn);

headerSvgClickArea.forEach(function(elem){
    elem.addEventListener('click', headerSvgClickAreaClick);
})
headerSliderPagItemClickArea.forEach(function(elem){
    elem.addEventListener('click', headerSliderPagItemActiv);
})


// header svg contol
headerSvgStartActiv();



// function definitin
function headerSliderPagItemActiv(e){
    headerSliderPagItem.forEach(function(elem){
        elem.classList.remove('header-slider__pag-item--activ');
    })

    let indexItem = e.target.dataset.hsvgdots;  
    headerSliderPagItem[indexItem].classList.add('header-slider__pag-item--activ');
    
    if(e.target.classList[0] == 'header-slider__pag-item-click-area'){
        headerSvgClickAreaClick(e);
    }
    headerSliderMoveController(indexItem);
}

function headerSliderMoveController(indexItem){
    headerSliderItem.forEach(function(elem, i){
        sliderItemContent[i].classList.remove('slideInLeft');
        elem.style.zIndex = 0;
    })
    headerSliderItem[indexItem].style.zIndex = 1;
    sliderItemContent[indexItem].classList.add('slideInLeft');
}

function headerSvgStartActiv (){
    headerSvgLine[0].style.display = 'initial';
    headerSvgText[0].style.display = 'initial';
    headerSvgDots[0].style.display = 'initial';  
    
    headerSliderPagItem[0].classList.add('header-slider__pag-item--activ');
    headerSliderItem[0].style.zIndex = 1;
}

function headerSvgClickAreaClick(e){
    for(let i = 0; i < headerSvgLine.length; i++){
        headerSvgLine[i].style.display = 'none';
        headerSvgText[i].style.display = 'none';
        headerSvgDots[i].style.display = 'none';
    }

    let currentHeaderSvgDot = e.target.dataset.hsvgdots
    headerSvgText[currentHeaderSvgDot].style.display = 'initial';
    headerSvgDots[currentHeaderSvgDot].style.display = 'initial';
    headerSvgLine[currentHeaderSvgDot].style.display = 'initial';
    if(e.target.classList[0] == 'header-slider__click-area'){
        headerSliderPagItemActiv(e);
    }
}

function detailsCounterBtn(e){
    let nightNum = +detailsCounterNightsNum.innerText 
    let guestsNum = +detailsCounterGuestsNum.innerText
    // minus section
    if(e.target.className == "details-counter__minus"){

        if(e.target.dataset.num == 'nights' && nightNum > 1){
            detailsCounterNightsNum.innerText = nightNum - 1;
        }
        else if (e.target.dataset.num == 'guests' && guestsNum > 1){
            detailsCounterGuestsNum.innerText = guestsNum - 1;
        }
    }
    //plus section
    else if(e.target.className == "details-counter__plus"){

        if(e.target.dataset.num == 'nights' && nightNum < 10){
            detailsCounterNightsNum.innerText = nightNum + 1;
        }
        else if (e.target.dataset.num == 'guests' && guestsNum < 10){
            detailsCounterGuestsNum.innerText = guestsNum + 1;
        }
    }


    detailsTotalPriceCounting();
 
}

function detailsTotalPriceCounting(){
    let defaultPrice = 40;
    let nights = +detailsCounterNightsNum.innerText 
    let guests = +detailsCounterGuestsNum.innerText 
    detailsTotalPrice.innerText = `$${defaultPrice * nights + (defaultPrice * 0.25) * guests} USD`;
}

function ShopSliderPhotoDotsActiv(e){
    
    if(e.target.classList[0] == 'shop-slider__photo-dots'){
        e.target.classList.toggle('shop-slider__photo-dots--activ');
    }
    
}

function mapTooltipEnable(e) {
    if (e.target.dataset.dots >= 0) {
        currentTooltipItem = e.target.dataset.dots;
        mapTooltipItem[currentTooltipItem].classList.remove('disable');
        mapTooltip.style.left = (e.layerX - 166) + 'px';
        mapTooltip.style.top = (e.layerY - 217) + 'px';
        mapTooltip.classList.remove('disable');
        e.target.style.display = "none";
        currentMapDots = e.target;
    }
}

function mapTooltipDisable() {
        mapTooltip.classList.add('disable');
        currentMapDots.style.display = 'initial';
        mapTooltipItem[currentTooltipItem].classList.add('disable');
}