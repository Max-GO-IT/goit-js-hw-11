export function fetchImages(query, page = 1) {
  const url = `https://pixabay.com/api/?q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Не вдалося отримати дані від Pixabay API');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('Нічого не знайдено за вашим запитом');
      }
      return data.hits;
    });
}