import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
function handleCreateCards(event) {
    return galleryItems.map(({ preview, original, description }) => {
            return`<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
         data-source="${original}"
         src="${preview}"
         alt="${description}"
         /></a></div>`}).join("")
};
const paletteContainer = document.querySelector('.gallery');

 const cardMarking=handleCreateCards(galleryItems)
    paletteContainer.insertAdjacentHTML('beforeend', cardMarking)
   
paletteContainer.addEventListener('click',handlePaletteContainerClick);

function handlePaletteContainerClick(evn) {
    evn.preventDefault();

      if (evn.target.nodeName !== 'IMG') {
    return;
  }
    const instance = basicLightbox.create(`<img src="${evn.target.dataset.source}">`,{
        onShow: instance => {
            window.addEventListener('keydown', closeOnEsc);
        },
        onClose: instance => {
            window.removeEventListener('keydown', closeOnEsc);
        },
    });

function closeOnEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
    
instance.show()
}

