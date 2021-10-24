/* eslint-disable max-len */
import CONFIG from '../../globals/config';
import truncateString from '../../utils/truncate-strings';
import UrlParser from '../../routes/url-parser';

const createRestaurantItemTemplate = (restaurant) => /* html */ `
    <article class="post-item">
      <div class="card-box">
        <img
          class="lazyload"
          data-src="${CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_MEDIUM + restaurant.pictureId}"
          width="1500"
          height="1368"
          alt="${restaurant.name}"
        />
        
      </div>
      <div class="card-content">
        <p class="card-tags">
          <span class="card-tag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
            </svg>
            ${restaurant.city}</span>
        </p>

        <h1 class="card-title">
          <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
        </h1>

        <p class="card-metadata">
          <span class="card-rating">⭐️${restaurant.rating}</span>
        </p>

        <p class="card-desc">
          ${truncateString(`${restaurant.description}`, 150)}
        </p>
      </div>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => /* html */ `
    <section class="profile_container">
      <div class="profile_img_section">
        <img 
          class="profile_img-LG"
          src="${CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_LARGE + restaurant.pictureId}" 
          alt="${restaurant.name}"
        />
      </div>

      <div class="profile_desc_section">
        <p class="restaurant-details__name">${restaurant.name}</p>
        <p class="restaurant-details__rating">⭐️${restaurant.rating}/5</p>
        <p class="restaurant-details__address"><span><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
            </svg></span>${restaurant.address}, ${restaurant.city}</p>
        <p class="description">${restaurant.description}</p>

        <div id="category-list">
        </div>
      </div>
    </section>

    
`;

const createFoodListTemplate = (menu) => /* html */ `
    <li>
      <div class="link_img_wrapper">
        <img class="link_img"
          src="${CONFIG.IMAGE_DEFAULT_FOOD_URL}"
          alt="">
      </div>
      <p>${menu.name}</p>
    </li>
`;

const createBeverageListTemplate = (menu) => /* html */ `
    <li>
      <div class="link_img_wrapper">
        <img class="link_img"
          src="${CONFIG.IMAGE_DEFAULT_DRINK_URL}"
          alt="">
      </div>
      <p>${menu.name}</p>
    </li>
`;

const createCategoryListTemplate = (category) => /* html */ `
  <span class="category-list__item">${category.name}</span>
`;

const createReviewContentTemplate = (review) => /* html */ `
  <div class="box red">
    <h2 class="review-name">${review.name}</h2>
    <p class="review-date"><span><i class="fa fa-calendar" aria-hidden="true"></i></span> ${review.date}</p>
    <p class="review-content">${review.review}</p>
  </div>
`;

const createReviewListTemplate = () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();

  return /* html */ `
  <div class="review__accordion">
    <input type="checkbox" name="radio-a" id="check1" class="accordion-check">
    <label class="accordion-label" for="check1">Customer Review</label>
    <div class="review__content" id="review-list">  
    </div>
    <div class="review__submit" id="review-submit">
      <form class="form-review">
        <input name="id" type="hidden" value="${url.id}">
        <label for="name">Nama</label>
        <input placeholder="Nama" type="text" name="name" id="name"> 
        <label for="review">Review kamu terhadap restoran ini</label>
        <input placeholder="Review" type="text" name="review" id="review">
        <button type="submit" id="post-review">Submit</button>
        <p id="empty-form"></p>
      </form>
    </div>
  </div>
`;
};

const createFavoriteRestaurantButtonTemplate = () => /* html */`
  <button aria-label="like this restaurant" id="favoriteButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => /* html */`
  <button id="favoriteButton" class="like" aria-label="unlike this restaurant">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFoodListTemplate,
  createBeverageListTemplate,
  createCategoryListTemplate,
  createReviewContentTemplate,
  createReviewListTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
