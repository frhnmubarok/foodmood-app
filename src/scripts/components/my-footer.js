class MyFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer">
        <ul>
          <li>Copyright © 2021 - FoodMood</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);
