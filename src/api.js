const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';

export const fetchData = () => {
  return fetch(API_ENDPOINT)
    .then(res => res.json());
};
