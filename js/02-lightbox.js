
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

console.log(galleryItems);
function handleCreateCards(event) {
    return galleryItems.map(({ preview, original, description }) => {
            return`<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
         data-source="${original}"
         src="${preview}"
         alt="${description}"
         /></a></li>`}).join("")
};
const paletteContainer = document.querySelector('.gallery');

 const cardMarking=handleCreateCards(galleryItems)
    paletteContainer.insertAdjacentHTML('beforeend', cardMarking)
   
 const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});


