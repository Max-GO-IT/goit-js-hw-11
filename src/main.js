import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
  loading.classList.remove('hidden');

  fetchImages(searchQuery)
    .then(images => {
      renderImages(images);
      loading.classList.add('hidden'); 
    })
    .catch(error => {
      iziToast.error({
        title: 'Помилка!',
        message: 'Щось пішло не так. Спробуйте пізніше.',
      });
      loading.classList.add('hidden'); 
    });
});

let lightbox = new SimpleLightbox('.gallery a', {
  /* Параметри SimpleLightbox */
  captionDelay: 250,
  captionsData: 'alt',
});

gallery.addEventListener('click', () => {
  lightbox.refresh(); // Оновлення SimpleLightbox після додавання нових зображень
});