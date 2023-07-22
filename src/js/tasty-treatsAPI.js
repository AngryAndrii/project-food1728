'use strict';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';
const END_POINTS = 'recipes?page=2';

class testyTreatsAPI {
  page = 1;
  limit = 6;

  async loadTasty() {
    return await axios.get(`${BASE_URL}` + `${END_POINTS}`);
  }
}
const testy = new testyTreatsAPI();
async function getRecipes() {
  const recipes = await testy.loadTasty();
  return recipes;
}
console.log(getRecipes());