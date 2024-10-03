'use strict';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";
import simpleLightbox from "simplelightbox";


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
let lightbox = null;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = form.elements.query.value.trim();

    if(inputValue === '') {
        iziToast.error({
            title: '',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
        return;
    };
    gallery.innerHTML = '';
    showLoader();

    fetchImages(inputValue)
    .then(images => {
        if(images.hits.length === 0) {
            iziToast.error({
                title: '',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        } else {
            renderImages(images);
        }
        if(!lightbox) {
            lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionPosition: 'bottom',
                captionDelay: 200,  
            });
        } else {
            lightbox.refresh();
        }
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        hideLoader();
        form.reset();
    });
    
});


 function showLoader() {
        const loader = document.querySelector('.loader');
        loader.classList.remove('visually-hidden');
    };
    
 function hideLoader() {
        const loader = document.querySelector('.loader');
        loader.classList.add('visually-hidden');
    };