import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.classList.add('hero__none');
    return /* html */ `
      <div class="list">
        <p class="list-favorite__label">Daftar Restoran Favorit</p>
        <div class="list-favorite" id="list-favorite"></div>
      </div>
    `;
  },

  async afterRender() {
    const favoritedRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoritedRestaurantsContainer = document.querySelector('#list-favorite');
    if (favoritedRestaurants.length === 0) {
      const emptyList = document.createElement('p');
      emptyList.className = 'empty-message';
      emptyList.innerHTML = 'Belum ada restoran favorit';

      favoritedRestaurantsContainer.appendChild(emptyList);
    } else {
      favoritedRestaurants.forEach((restaurant) => {
        favoritedRestaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
