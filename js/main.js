const galleryInner = document.querySelector('.gallery__inner');
const galleryItemContent = document.querySelectorAll('.gallery__item-content');
const galleryItemLink = document.querySelectorAll('.gallery__item-link')
const galleryItemBtn = document.querySelectorAll('.gallery__item-btn')


galleryInner.addEventListener('mouseover', galleryItemContentActiv);
galleryInner.addEventListener('mouseout', galleryItemContentDisable);


function galleryItemContentActiv(e){
   
    if(e.target.classList.contains('gallery__item-link')){
        galleryItemContent[e.target.dataset.currentItem].classList.remove('disable');  
    }
}
function galleryItemContentDisable(e){
    if(e.target.classList.contains('gallery__item-link')){
        galleryItemContent[e.target.dataset.currentItem].classList.add('disable');  
    }
    
}