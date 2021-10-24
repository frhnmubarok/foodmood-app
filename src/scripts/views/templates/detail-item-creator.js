import {
  createCategoryListTemplate, createFoodListTemplate, createBeverageListTemplate, createReviewContentTemplate,
} from './template-creator';

const categoryListToContainer = (array, container) => {
  array.categories.forEach((category) => {
    document.querySelector(container).innerHTML += createCategoryListTemplate(category);
  });
};

const foodListToContainer = (array, container) => {
  array.menus.foods.forEach((menu) => {
    document.querySelector(container).innerHTML += createFoodListTemplate(menu);
  });
};

const beverageListToContainer = (array, container) => {
  array.menus.drinks.forEach((menu) => {
    document.querySelector(container).innerHTML += createBeverageListTemplate(menu);
  });
};

const reviewContentToContainer = (array, container) => {
  array.customerReviews.forEach((category) => {
    document.querySelector(container).innerHTML += createReviewContentTemplate(category);
  });
};

export {
  foodListToContainer, beverageListToContainer, categoryListToContainer, reviewContentToContainer,
};
