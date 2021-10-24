class MobileNavigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <div class="mobile-navigation--header">
        <p class="logo-font">FoodMood</p>
      </div>
      <div id="drawer-item">
        <a href="#/home" class="mobile-navigation--item">Home</a>
        <a href="#/favorite" class="mobile-navigation--item">Favorite</a>
        <a href="https://github.com/frhnmubarok" target="_blank" rel="noopener noreferrer"
          class="mobile-navigation--item">About Us</a>
      </div>
    `;
  }
}

customElements.define('mobile-navigation', MobileNavigation);
