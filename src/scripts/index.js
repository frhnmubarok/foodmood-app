import 'regenerator-runtime'; /* for async await transpile */
import './components/my-footer';
import './components/mobile-navigation';
import './components/app-bar';
import './components/hero';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('menu-button'),
  drawer: document.getElementById('mobile-navigation'),
  close: document.getElementById('drawer-item'),
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
