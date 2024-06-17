import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
 
import { fetchImages } from './pixabay-api.js';
import { renderImages } from './render-functions.js';


const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loading = document.querySelector('#loading');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('#search-input').value.trim();

  if (searchQuery === '') {
    return;
  }

  gallery.innerHTML = '';
//  loading.classList.remove('hidden');

  fetchImages(searchQuery)
    .then(images => {
      renderImages(images);
    //  loading.classList.add('hidden');
    })
    .catch(error => {
    //  loading.classList.add('hidden');
    });
});



const lightbox = new SimpleLightbox('.gallery-link', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionType: 'attr',
  captionsData: 'alt',
});
gallery.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery-image")) {
    const largeImageLink = event.target.dataset.source;
    

    console.log('Ссылка на большое изображение:', largeImageLink);
    //const instance1 = basicLightbox.create(`<img src="${largeImageLink}" width="800" height="600">`)
    //instance1.show()
    //------------------------------------------------------------------------------//
    
    //  Показать lightbox при загрузке страницы
   



    //-------------------------------------------------------------------------------//    

  }
});