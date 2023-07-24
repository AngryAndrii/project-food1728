import refs from './refs';
import { countPage, groupArrayIntoChunks } from './counter';
import { renderingFavRec } from './render-favorites';
import { pagination } from '../pagin';
import { displayFavorites } from './favorites-dis';

let currentBtn = '';

function toggleActiveClass({ target }) {
  const btn = document.querySelector('.is-active');
  if (!btn) refs.allCategoriesBtn.classList.add('is-active');
  else btn.classList.remove('is-active');
  target.classList.add('is-active');
}

export function handleCategoryFilter(evt) {
  if (evt.target.classList.contains('is-active')) return;

  let data = [];
  let categoryRecipes;
  refs.btnListFavorites.innerHTML = '';

  if (evt !== Number(evt) && evt.target.nodeName === 'BUTTON') {
    toggleActiveClass(evt);
    currentBtn =
      evt.target.name === 'main-cat-btn' ? '' : evt.target.textContent;
  }

  const storage = localStorage.getItem('favorites-data');
  data = JSON.parse(storage);

  if (!data || data.length === 0) {
    refs.categoriesFavorites.style.display = 'none';
    return;
  }

  if (!currentBtn) {
    displayFavorites();
    return;
  }

  categoryRecipes = [...data.filter(recipe => recipe.category === currentBtn)];

  let pageSet = 1;

  if (Number(evt) === evt) pageSet = evt;

  const perPage = countPage();
  const objData = groupArrayIntoChunks(categoryRecipes, perPage);
  const totalPages = Object.keys(objData).length;

  refs.pagElement.style.display = totalPages > 1 ? 'block' : 'none';
  pagination(pageSet, perPage, totalPages, displayFavorites);

  const listMarkup = objData[pageSet].reduce(
    (markup, { title, description, preview, rating, id, category }) =>
      markup +
      renderingFavRec(title, description, preview, rating, id, category),
    ''
  );

  refs.btnListFavorites.innerHTML = listMarkup;
}