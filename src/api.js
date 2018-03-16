const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';

export const fetchAlbums = () => {
  return fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(json => json);
};