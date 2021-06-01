import styles from './styles.scss';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    ${styles}
  </style>

  <div class="alt-image">
    <slot></slot>
  </div>
`;

class ImgComparisonSlider extends HTMLElement {
  element: HTMLElement;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.element = shadowRoot.querySelector('.alt-image');
  }

  connectedCallback() {
    const img = this.querySelector('img');

    if (img === null) {
      return;
    }

    if (!img.alt) {
      return;
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = img.alt;

    this.element.appendChild(paragraph);
  }
}

window.customElements.define('img-comparison-slider', ImgComparisonSlider);
