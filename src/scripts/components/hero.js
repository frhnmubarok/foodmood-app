class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <div tabindex="0" class="hero__inner">
        <h1 class="hero__title">
          Balikin lagi mood kamu di
          <span class="hero-bold">FoodMood</span>
        </h1>
        <p class="hero__tagline">
          Kami sediakan resto yang bikin mood kamu balik lagi :)
        </p>
        <br />
        <a href="#content" class="btn">List Resto</a>
      </div>
    `;
  }
}

customElements.define('hero-custom', Hero);
