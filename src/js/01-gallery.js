// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);
const paletContainer = document.querySelector(".gallery");
const imgMarkup = createImgGalleryMarkup(galleryItems);

paletContainer.insertAdjacentHTML("beforeend", imgMarkup);

// console.log(createImgGalleryMarkup(galleryItems));
function createImgGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt"
});