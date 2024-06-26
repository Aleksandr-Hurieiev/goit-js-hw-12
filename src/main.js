// main.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import makeRequest from './js/pixabay-api.js'; // Adjust the path based on your project structure
import renderUser, { list } from './js/render-function.js'; // Adjust the path based on your project structure

const param = {
  key: '44329356-b9318945d135833e2eb07a97b',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

// Контролює кількість елементів в групі
// Кількість груп в колекції
const form = document.querySelector('.form_js');
const loader = document.querySelector('#loader');
const formButton = document.querySelector('.form__button');
const formInput = document.querySelector('.form__input');
const loadMore = document.querySelector('.button-js');
form.addEventListener('submit', createData);
//====================================================================
export let page = 1;
let totalPages = 0;

async function createData(event) {
  event.preventDefault();
  loadMore.classList.add('isActive');
  list.innerHTML = '';
  const search = event.target[0].value.trim();
  param.q = search;
  page = 1;
  totalPages = 0;
  if (!search) {
    event.target[0].value = '';
    return iziToast.warning({
      title: 'Warning',
      message: 'Enter more than one character',
      position: 'topRight',
    });
  }
  try {
    const users = await makeRequest(param, page);
    if (!users.hits.length) {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      totalPages = Math.ceil(users.totalHits / param.per_page);
      toggleLoading(true);
      setTimeout(() => {
        renderUser(users);
        toggleLoading(false);
        if (users.totalHits < 12) {
          loadMore.classList.add('isActive');
          iziToast.error({
            title: 'Sorry',
            message:
              "We're sorry, but you've reached the end of search results.",
          });
          return;
        }
        loadMore.classList.remove('isActive');
      }, 500);
    }
  } catch (error) {
    iziToast.error({
      title: `${error}`,
      message: 'Page not found',
      position: 'topRight',
    });
  } finally {
    form.reset();
  }
}
//=========================================================================================================================================
loadMore.addEventListener('click', async () => {
  page += 1;
  try {
    const moreUser = await makeRequest(param, page);
    toggleLoading(true);
    setTimeout(() => {
      renderUser(moreUser);
      toggleLoading(false);
      smoothScroll();
    }, 500);

    if (page < totalPages) {
      return;
    }
    loadMore.classList.add('isActive');
    iziToast.error({
      title: 'Sorry',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } catch (error) {}
});
//=========================================================================================================================================
function smoothScroll() {
  const { height: cardHeight } = list.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2.5,
    behavior: 'smooth',
  });
}
//=========================================================================================================================================
function toggleLoading(isLoading) {
  loader.classList.toggle('loader', isLoading);
  formButton.classList.toggle('form__button-active', isLoading);
  formInput.disabled = isLoading;
  formButton.disabled = isLoading;
}
//=========================================================================================================================================
