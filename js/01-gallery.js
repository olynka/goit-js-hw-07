import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// console.log(handleCreateCards(params));
function handleCreateCards(colors) {
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
const isImagSwatch = evn.target.classList.contains('gallery__item');
if (!isImagSwatch) {
    return
    
}
    
    console.log(evn.target);


const instance = basicLightbox.create(`
    <img src="${evn.target.dataset.create.sourse}" width="800" height="600">
`)

instance.show()
}
  
