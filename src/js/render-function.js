import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const list = document.querySelector('#list-js');
let gallery = new SimpleLightbox('.list__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
export default function renderUser(users) {
  const markup = users.hits
    .map(user => {
      return `<div class="gallery">
      <li class="list__item">        
          <a href="${user.webformatURL}"><img class="list__img" src="${user.webformatURL}" alt="${user.user}"</a>      
    <ul class="item__list">
      <li class="item__list-item">
        <h3 class="item__list-title">Likes</h3>
        <p class="item__list-text">${user.likes}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Views</h3>
        <p class="item__list-text">${user.views}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Comments</h3>
        <p class="item__list-text">${user.comments}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Downloads</h3>
        <p class="item__list-text">${user.downloads}</p>
      </li>
    </ul>
  </li>
  </div>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
