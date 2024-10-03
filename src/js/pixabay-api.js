'use strict';
export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46311357-e3a4e4c71d54a60b91a510c1d';

export function fetchImages(query) {
const options = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
});
return fetch(`${BASE_URL}?${options.toString()}`)
.then(response => {
    if(!response.ok) {
       throw new Error(response.status); 
    }
    return response.json();
});
}