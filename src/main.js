import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loading = document.querySelector('#loading');
loading.style.display = "none";

let lightbox = null; 

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('#search-input').value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      title: 'Введіть запит!',
      message: 'Будь ласка, введіть пошуковий запит',
    });
    return;
  }

  loading.classList.remove('hidden');
  gallery.innerHTML = '';
  loading.style.display = "block";

  fetchImages(searchQuery)
    .then(images => {
      renderImages(images);
      
      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery-link', {
          captionDelay: 250,
          captionPosition: 'bottom',
          captionType: 'attr',
          captionsData: 'alt',
        });
      } else {
        lightbox.refresh(); 
      }
    })
    .then(() => {
      loading.style.display = "none";
    })
    .catch(error => {
      loading.style.display = "none";
      iziToast.error({
        title: 'Помилка!',
        message: error.message,
      });
    });
});


