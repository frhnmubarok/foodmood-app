import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate, createReviewContentTemplate, createReviewListTemplate,
} from '../templates/template-creator';
import {
  beverageListToContainer, foodListToContainer, categoryListToContainer, reviewContentToContainer,
} from '../templates/detail-item-creator';
import formToJSON from '../../utils/form-to-json';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';

const Detail = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.classList.add('hero__none');
    return /* html */ `
          <div id="restaurant" class="restaurant">
            
            <div id="restaurant-details" class="restaurant-details">

            </div>
            <div class="review__container" id="review-container">
              
            </div>
            <div class="spinner" id="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
            </div>
            <div class="info">
              <h3>Makanan :</h3>
              <ul class="menu-list" id="food-list">
                
              </ul>
              <h3>Minuman :</h3>
              <ul class="menu-list" id="beverage-list">
                
              </ul>
            </div>
            
          </div>
          <div id="favoriteButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailContainer = document.querySelector('#restaurant-details');
    const customerReviewContainer = document.querySelector('#review-container');
    const spinnerContainer = document.querySelector('#spinner');

    try {
      const restaurantDetails = await RestaurantSource.detailRestaurant(url.id);
      restaurantDetailContainer.innerHTML += createRestaurantDetailTemplate(restaurantDetails);
      customerReviewContainer.innerHTML += createReviewListTemplate();
      spinnerContainer.remove();

      foodListToContainer(restaurantDetails, '#food-list');
      beverageListToContainer(restaurantDetails, '#beverage-list');
      categoryListToContainer(restaurantDetails, '#category-list');
      reviewContentToContainer(restaurantDetails, '#review-list');

      FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurantDetails.id,
          name: restaurantDetails.name,
          city: restaurantDetails.city,
          address: restaurantDetails.address,
          rating: restaurantDetails.rating,
          pictureId: restaurantDetails.pictureId,
          description: restaurantDetails.description,
        },
      });
    } catch (err) {
      restaurantDetailContainer.innerHTML = `Error${err}, Silakan perika koneksi internet kamu`;
    }

    const nameInput = document.querySelector('#name');
    const reviewInput = document.querySelector('#review');
    const form = document.getElementsByClassName('form-review')[0];

    const handleFormSubmit = (event) => {
      if (nameInput.value === '' || reviewInput.value === '') {
        document.getElementById('empty-form').innerHTML = 'Mohon isi semua kolom';
      } else {
        event.preventDefault();
        document.getElementById('empty-form').innerHTML = '';
        const data = formToJSON(form.elements);
        RestaurantSource.postCustomerReview(data).then((reviewData) => {
          const review = reviewData.customerReviews.slice(-1)[0];
          form.reset();

          document.querySelector('#review-list').innerHTML += createReviewContentTemplate(review);
        });
      }
    };

    form.addEventListener('submit', handleFormSubmit);
  },
};

export default Detail;
