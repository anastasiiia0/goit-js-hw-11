import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  gallery.innerHTML = '';
  loader.classList.add('is-open');

  const userInput = event.target.search.value.trim();
  if (userInput === '') {
    loader.classList.remove('is-open');
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search word',
      position: 'topRight',
    });

    return;
  }

  searchImages(userInput)
    .then(images => renderGallery(images))
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Error fetching images',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.remove('is-open');
      event.target.reset();
    });
}
