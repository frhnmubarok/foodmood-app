import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.classList.remove('hero__none');
    return /* html */ `
      <div class="list">
        <p class="list__label">Daftar Restoran</p>
        <div class="spinner" id="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
        <div class="list-resto" id="list-resto"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#list-resto');
    const loaderContainer = document.querySelector('#spinner');

    try {
      const restaurants = await RestaurantSource.listRestaurants();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        loaderContainer.remove();
      });
    } catch (err) {
      restaurantsContainer.innerHTML = `Error${err}, Silakan perika koneksi internet kamu`;
    }
  },
};
export default Home;
