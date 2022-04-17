class holaMundo extends HTMLElement {
  constructor() {
    super();
    this.name;
    this.surname;
  }

  static get observedAttributes() {
    return ["name", "surname"];
  }

  attributeChangedCallback(nameAtr, oldValue, newValue) {
    switch (nameAtr) {
      case "name":
        this.name = newValue;
        break;
      case "surname":
        this.surname = newValue;
        break;
      default:
        return;
    }
  }

  connectedCallback() {
    this.innerHTML = `
    <div>
      <h1>Hola Mundo ${this.name}</h1>
      <p>Parrafo de hola mundo!</p>
    </div>`;
    this.style.color = "red";
  }
}

window.customElements.define("hola-mundo", holaMundo);
