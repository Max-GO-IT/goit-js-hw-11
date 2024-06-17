import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


export function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=44433569-eda6d7623baf54ab2611b04f8&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Не вдалося отримати дані від Pixabay API');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw iziToast.error({
          title: 'Помилка!',
          message: 'Нічого не знайдено за вашим запитом',
        });
      }
      return data.hits;
    })
    .catch(error => {
      iziToast.error({
        title: 'Помилка!',
        message: error.message,
      });
      throw error; 
    });
}