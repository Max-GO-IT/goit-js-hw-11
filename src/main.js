import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
    return; // Якщо поле пусте, нічого не робимо
  }

  gallery.innerHTML = ''; // Очищення галереї
  loading.classList.remove('hidden'); // Показати індикатор завантаження

  fetchImages(searchQuery)
    .then(images => {
      renderImages(images);
      loading.classList.add('hidden'); // Приховати індикатор завантаження
    })
    .catch(error => {
      // Виведення повідомлення про помилку через iziToast
      iziToast.error({
        title: 'Помилка!',
        message: 'Щось пішло не так. Спробуйте пізніше.',
      });
      loading.classList.add('hidden'); // Приховати індикатор завантаження
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