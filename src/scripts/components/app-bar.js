class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <nav class="nav sticky">
        <div>
          <a href="/" class="logo-font">FoodMood</a>
        </div>
        <div class="header__menu">
          <button id="menu-button" aria-label="menu button">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="navigation" id="navigation">
          <ul class="nav-list">
            <li class="nav-item"><a href="#/home">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item">
              <a href="https://github.com/frhnmubarok" target="_blank" rel="noopener noreferrer">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
