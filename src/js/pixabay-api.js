import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function searchImages(userInput) {
  const API_KEY = '43065562-482e0c4e1ab6b062f2c90306d';
  const URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    userInput +
    '&image_type=photo&orientation=horizontal&safesearch=true';

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      return images;
    })
    .catch(error => console.log(error));
}
