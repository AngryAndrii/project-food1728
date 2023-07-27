import { testyTreatsAPI } from "./tasty-treatsAPI";

export const favoritesJSON = localStorage.getItem("favorites");
let recipesThatAddedToFavorites;
let wasDeleted = false;

if (favoritesJSON) {
  recipesThatAddedToFavorites = JSON.parse(favoritesJSON);
} 
else {
  recipesThatAddedToFavorites = []; 
}

export async function onHeartBtnClick(e) {
  const recipeHeartBtnEl = e.target.closest('.recipe-heart-btn');

  if (!recipeHeartBtnEl) {
    return;
  };
  const wasClicked = recipeHeartBtnEl.firstElementChild.classList.toggle('recipe-heart-icon-in-favorites');
  const recipeId = recipeHeartBtnEl.closest('article').getAttribute("id");

  const recipesfavorit = await recipesInFavorites(recipeId);
  if(!wasClicked) {
    deleteRecipeFromFavorites(recipeId);
    return;
  }
  wasDeleted = false;
  
  if(!wasDeleted) {
    recipesThatAddedToFavorites.push(recipesfavorit);
    localStorage.setItem("favorites", JSON.stringify(recipesThatAddedToFavorites));
  }
}
export function deleteRecipeFromFavorites(recipeId) {
  recipesThatAddedToFavorites = recipesThatAddedToFavorites.filter((recipe) => recipe._id !== recipeId);
  localStorage.setItem("favorites", JSON.stringify(recipesThatAddedToFavorites));
  wasDeleted = true;
}
export function fillingHeartThatWasAddedToFavorites() {
  try {
    const favoritesFromLocalStorage = JSON.parse(favoritesJSON);
    if(favoritesFromLocalStorage === null) {
      return;
    }
    favoritesFromLocalStorage.map(favRecipe=> {
    const articleEl = document.querySelector(`article[id="${favRecipe._id}"]`);
    const recipeHeartIconEl = articleEl.querySelector('.recipe-heart-icon');
    recipeHeartIconEl.classList.add('recipe-heart-icon-in-favorites');
    })
  }
  catch(error) {
    console.log(error);
  }
}
 async function recipesInFavorites(idRecipe) {
  const testy = new testyTreatsAPI();
    try {
      testy.id = idRecipe;
      const response = await testy.loadRecipesById();
      return await response.data;
    }
    catch(error) {
      console.log(error);
    }
  }
  