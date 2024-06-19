import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import makeRequest from './js/pixabay-api.js';
import renderUser, { list } from './js/render-function.js';

//=========================================================================
let userInput;
export let page = 1;
let limit = 48;
const totalPages = Math.ceil(100 / limit);
//=========================================================================

const form = document.querySelector('.form_js');
const loader = document.querySelector('#loader');
const formButton = document.querySelector('.form__button');
const formInput = document.querySelector('.form__input');
const showMore = document.querySelector('.button-js');
//=========================================================================================================================================

form.addEventListener('submit', createData);
showMore.addEventListener('click', showMoreItem);
//=========================================================================
async function showMoreItem(event) {
  if (page >= totalPages) {
    showMore.classList.add('button-active');
    showMore.disabled = true;
    return iziToast.info({
      title: 'Sorry',
      message: 'no more photos!',
    });
  }
  const moreItem = await makeRequest(userInput);
  renderUser(moreItem);
  page += 1;
  console.log(page);
}

//=========================================================================================================================================

function createData(event) {
  event.preventDefault();
  showMore.classList.add('isActive');
  list.innerHTML = '';
  const search = event.target[0].value.trim();
  userInput = event.target[0].value.trim();
  if (!search) {
    event.target[0].value = '';
    return iziToast.warning({
      title: 'Warning',
      message: 'Enter more than one character',
      position: 'topRight',
    });
  }

  userInput = search;
  toggleLoading(true);

  setTimeout(() => {
    makeRequest(userInput)
      .then(users => {
        if (!users.data.hits.length) {
          showMore.classList.add('isActive');
          iziToast.error({
            position: 'topRight',
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          renderUser(users);
          showMore.classList.remove('isActive');
        }
      })
      .catch(error => {
        console.log(error);
        iziToast.error({
          title: `${error}`,
          message: 'Page not found',
          position: 'topRight',
        });
      })
      .finally(() => {
        toggleLoading(false);
      });
  }, 1000);
  form.reset();
}

function toggleLoading(isLoading) {
  loader.classList.toggle('loader', isLoading);
  formButton.classList.toggle('form__button-active', isLoading);
  formInput.disabled = isLoading;
  formButton.disabled = isLoading;
}
