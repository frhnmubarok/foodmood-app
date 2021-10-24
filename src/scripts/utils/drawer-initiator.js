const DrawerInitiator = {
  init({
    button, drawer, close, content,
  }) {
    button.addEventListener('click', (event) => {
      this._openDrawer(event, drawer);
    });

    close.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _openDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('mobile-navigation__open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('mobile-navigation__open');
  },
};

export default DrawerInitiator;
