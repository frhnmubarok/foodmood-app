const Detail = require('../views/pages/detail');
const Favorite = require('../views/pages/favorite');
const Home = require('../views/pages/home');

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
