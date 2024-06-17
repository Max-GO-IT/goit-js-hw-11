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

  fetchImages(searchQuery, 1)
    .then(images => {
      renderImages(images);
      loading.classList.add('hidden');
    })
    .catch(error => {
      loading.classList.add('hidden');
    });
});