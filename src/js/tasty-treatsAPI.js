import axios from 'axios';
import { Report } from 'notiflix/build/notiflix-report-aio';
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';

export class testyTreatsAPI {
  page = 1;
  limit = 6;
  id = '';
  title = '';
  category = '';
  area = '';
  ingredient = '';
  time = '';

  async loadRecipes() {
    const windowWidth = Math.round(window.visualViewport.width);
    if (windowWidth > 760 && windowWidth < 1280) {
      this.limit = 8;
    } else if (windowWidth > 1280) {
      this.limit = 9;
    }
    this.time = (this.time !== null && this.time !== undefined && this.time !== '' && this.time !== '0 min') ? this.time.slice(0, 2) : '';
    this.area = (this.area !== null && this.area !== undefined && this.area !== '' && this.area !== 'Region') ? this.area : '';
    this.ingredient = (this.ingredient !== null && this.ingredient !== undefined && this.ingredient !== '' && this.ingredient !== 'Product') ? this.ingredient : '';
    this.category = (this.category !== null && this.category !== undefined && this.category !== '') ? this.category : '';
    return await axios.get(`${BASE_URL}recipes/`, {
      params: {
        title: this.title,
        category: this.category,
        area: this.area,
        ingredient: this.ingredient,
        time: this.time,
        page: this.page,
        limit: this.limit,
      },
    });
  }

  async loadRecipesPopular() {
    return await axios.get(`${BASE_URL}recipes/popular/`);
  }

  async loadRecipesById() {
    return await axios.get(`${BASE_URL}recipes/${this.id}`);
  }

  async loadAreas() {
    return await axios.get(`${BASE_URL}areas/`);
  }

  async loadCategories() {
    return await axios.get(`${BASE_URL}categories/`);
  }

  async loadEvents() {
    return await axios.get(`${BASE_URL}events/`);
  }

  async loadIngredients() {
    return await axios.get(`${BASE_URL}ingredients/`);
  }

  async addOrder(data) {
    try {
      const resp = await axios.post(`${BASE_URL}orders/add`, data);
      if (resp.status !== 201) {
        throw new Error();
      }
      Report.success('Your order is accepted', 'Everything is fine');
    } catch (error) {
      Report.failure('Something went wrong. Try later...', 'Sorry');
    }
  }

  async patchRate(data) {
    try {
      const resp = await axios.patch(
        `${BASE_URL}recipes/${this.id}/rating`,
        data
      );
      console.log(resp);
      if (resp.status !== 200) {
        throw new Error();
      }
      Report.success('Rating updated', 'Thanks');
    } catch (error) {
      if (error.request.status !== 409) {
        Report.failure('Something went wrong. Try later...', 'Sorry');
      }
      Report.info('This letter already exists.', 'Sorry');
    }
  }
}
