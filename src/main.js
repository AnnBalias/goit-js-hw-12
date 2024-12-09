import { getImages } from './js/pixabay-api';
import { creatImg } from './js/render-functions';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

iziToast.settings({
  position: 'topRight',
  maxWidth: '432px',
});

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery-list');
const moreBtn = document.querySelector('.more');
const galleryImg = new SimpleLightbox('.gallery-item .gallery-link', {
  captionsData: 'alt',
});
let inputValue = '';
let page = 1;

form.addEventListener('submit', handSub);
moreBtn.addEventListener('click', handMore);

function handSub(event) {
  event.preventDefault();
  inputValue = event.target.elements.input.value.trim();
  page = 1;

  if (inputValue === '') {
    loader.classList.add('visually-hidden');
    moreBtn.classList.add('visually-hidden');
    iziToast.warning({
      message: 'The field is empty!',
    });
    return;
  }

  getImages(inputValue, page)
    .then(response => {
      if (response.total === 0) {
        gallery.innerHTML = '';
        throw new Error();
      }
      loader.classList.add('visually-hidden');
      moreBtn.classList.remove('visually-hidden');
      return response;
    })

    .then(response => {
      if (response.total <= 15) {
        gallery.innerHTML = '';
        gallery.innerHTML = creatImg(response.hits);
        galleryImg.refresh();
        loader.classList.add('visually-hidden');
        moreBtn.classList.add('visually-hidden');
        setTimeout(() => {
          iziToast.warning({
            message:
              "We're sorry, but you've reached the end of search results.",
          });
        }, 1500);
      }
      if (response.total > 15) {
        gallery.innerHTML = '';
        gallery.innerHTML = creatImg(response.hits);
        galleryImg.refresh();
        loader.classList.add('visually-hidden');
        moreBtn.classList.remove('visually-hidden');
      }
    })
    .catch(() => {
      loader.classList.add('visually-hidden');
      moreBtn.classList.add('visually-hidden');
      iziToast.error({
        iconColor: '#ffffff',
        messageColor: '#ffffff',
        progressBarColor: '#ffffff',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      event.target.elements.input.value = '';
    });
}

async function handMore(event) {
  page += 1;
  moreBtn.disabled = true;
  try {
    const nextPage = await getImages(inputValue, page);
    gallery.insertAdjacentHTML('beforeend', creatImg(nextPage.hits));
    galleryImg.refresh();

    if (
      nextPage.hits.length < 15 ||
      page === Math.ceil(nextPage.totalHits / 15)
    ) {
      moreBtn.classList.add('visually-hidden');
      setTimeout(() => {
        iziToast.warning({
          message: "We're sorry, but you've reached the end of search results.",
        });
      }, 2000);
    }

    const item = document.querySelector('.gallery-item');
    let itemHeight = Math.ceil(item.getBoundingClientRect().height);
    window.scrollBy({
      left: 0,
      top: itemHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    moreBtn.disabled = false;
  }
}
