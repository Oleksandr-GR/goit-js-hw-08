import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import createGallery from "./gallery-template";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const wholeGallery = createGallery(galleryItems);
galleryContainer.innerHTML = wholeGallery;

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
gallery.on('show.simplelightbox');

