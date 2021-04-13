class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Monserrat Reyes Garcia.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
© 2021 GitHub, Inc.
