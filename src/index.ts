import styles from './styles.scss';
import { inBetween } from './inBetween';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    ${styles}
  </style>

  <div class="before" id="before">
    <slot name="before"></slot>
  </div>
  <div class="after" id="after">
    <div class="handle-wrapper">
      <slot name="handle">
        <div class="handle"></div>
      </slot>
    </div>
    <div class="after-overlay">
      <div id="afterImageContainer">
        <slot name="after"></slot>
      </div>
    </div>
  </div>
`;

type SlideKey = 'ArrowLeft' | 'ArrowRight';

const KeySlideOffset: Record<SlideKey, number> = {
  ArrowLeft: -1,
  ArrowRight: 1,
};

export interface Point {
  x: number;
  y: number;
}

const getTouchPagePoint = (e: TouchEvent): Point => ({
  x: e.touches[0].pageX,
  y: e.touches[0].pageY,
});

class ImgComparisonSlider extends HTMLElement {
  beforeElement: HTMLElement;
  afterElement: HTMLElement;
  afterImageContainerElement: HTMLElement;

  private imageWidth: number;
  private exposure = 50;
  private isMouseDown = false;

  private keyboardSlideAnimationTimeoutId: number;
  private animationRequestId: number;
  private transitionTimer: number;

  private isFocused = false;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.beforeElement = shadowRoot.getElementById('before');
    this.afterElement = shadowRoot.getElementById('after');
    this.afterImageContainerElement = shadowRoot.getElementById(
      'afterImageContainer'
    );
  }

  connectedCallback() {
    this.querySelectorAll('img').forEach((img) => {
      img.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });

      img.addEventListener('load', () => {
        this.updateAfterWidth();
      });
    });

    window.addEventListener('resize', () => this.updateAfterWidth());

    this.slide(0);
    this.updateAfterWidth();
    this.setAttribute('tabindex', '0');

    this.addEventListener('keydown', (e) => this.onKeyDown(e));
    this.addEventListener('keyup', (e) => this.onKeyUp(e));
    this.addEventListener('focus', () => this.onFocus());
    this.addEventListener('blur', () => this.onBlur());
    this.addEventListener('touchstart', (e) => this.onTouchStart(e));
    this.addEventListener('touchmove', (e) => this.onTouchMove(e), {
      passive: false,
    });
    this.addEventListener('touchend', () => this.onTouchEnd());
    this.addEventListener('mousedown', (e) => this.onMouseDown(e));
  }

  disconnectedCallback() {
    if (this.transitionTimer) {
      window.clearTimeout(this.transitionTimer);
    }
  }

  /**
   * This dynamic window.onmousemove event handler
   * registers on mousedown and removes on mouse up.
   * The whole mumbo-jumbo is needed to capture
   * mouse events outside of component. This provides
   * better user experience.
   */
  private onWindowMouseMove = (e: MouseEvent) => {
    if (this.isMouseDown) {
      this.slideToPageX(e.pageX);
    }
  };

  private bodyUserSelectStyle = '';

  private onMouseDown(e: MouseEvent) {
    window.addEventListener('mousemove', this.onWindowMouseMove);
    window.addEventListener('mouseup', this.onWindowMouseUp);
    this.isMouseDown = true;
    this.slideToPageX(e.pageX, true);
    this.focus();
    this.bodyUserSelectStyle = window.document.body.style.userSelect;
    window.document.body.style.userSelect = 'none';
  }

  private onWindowMouseUp = () => {
    this.isMouseDown = false;
    window.document.body.style.userSelect = this.bodyUserSelectStyle;
    window.removeEventListener('mousemove', this.onWindowMouseMove);
    window.removeEventListener('mouseup', this.onWindowMouseUp);
  };

  touchStartPoint: Point;
  isTouchComparing = false;
  hasTouchMoved = false;

  private onTouchStart(e: TouchEvent) {
    this.touchStartPoint = getTouchPagePoint(e);

    if (this.isFocused) {
      this.slideToPageX(e.touches[0].pageX, true);
    }
  }

  private onTouchMove(e: TouchEvent) {
    if (this.isTouchComparing) {
      this.slideToPageX(e.touches[0].pageX);
      e.preventDefault();
      return false;
    }

    if (!this.hasTouchMoved) {
      const currentPoint = getTouchPagePoint(e);
      if (
        Math.abs(currentPoint.y - this.touchStartPoint.y) <
        Math.abs(currentPoint.x - this.touchStartPoint.x)
      ) {
        this.isTouchComparing = true;
        this.focus();
        this.slideToPageX(e.touches[0].pageX, true);
        e.preventDefault();
        return false;
      }

      this.hasTouchMoved = true;
    }
  }

  private onTouchEnd() {
    this.isTouchComparing = false;
    this.hasTouchMoved = false;
  }

  private onBlur() {
    this.stopSlideAnimation();
    this.isFocused = false;
  }

  private onFocus() {
    this.isFocused = true;
  }

  private onKeyDown(e: KeyboardEvent) {
    if (this.keyboardSlideAnimationTimeoutId) {
      return;
    }

    const key = e.key;

    if (!Object.keys(KeySlideOffset).includes(key)) {
      return;
    }

    this.startSlideAnimation(KeySlideOffset[key as SlideKey]);
  }

  private onKeyUp(e: KeyboardEvent) {
    if (!this.keyboardSlideAnimationTimeoutId) {
      return;
    }

    if (!Object.keys(KeySlideOffset).includes(e.key)) {
      return;
    }

    this.stopSlideAnimation();
  }

  private slide(increment = 0, transition = false) {
    this.exposure = inBetween(this.exposure + increment, 0, 100);

    if (transition) {
      const transitionTime = 100;
      this.afterElement.style.transition = `width ${transitionTime}ms`;

      this.transitionTimer = window.setTimeout(() => {
        this.afterElement.style.transition = null;
        this.transitionTimer = null;
      }, transitionTime);
    }

    this.afterElement.style.width = `${this.exposure}%`;
  }

  private slideToPageX(pageX: number, transition = false) {
    const x = pageX - this.getBoundingClientRect().left - window.scrollX;
    this.exposure = (x / this.imageWidth) * 100;
    this.slide(0, transition);
  }

  private startSlideAnimation(offset: number) {
    const fps = 120;
    const fraction = 1 * offset;

    const slide = () => {
      this.keyboardSlideAnimationTimeoutId = window.setTimeout(() => {
        this.animationRequestId = window.requestAnimationFrame(slide);
      }, 1000 / fps);
      this.slide(fraction);
    };

    slide();
  }

  private stopSlideAnimation() {
    if (!this.keyboardSlideAnimationTimeoutId) {
      return;
    }

    window.clearTimeout(this.keyboardSlideAnimationTimeoutId);
    window.cancelAnimationFrame(this.animationRequestId);
    this.keyboardSlideAnimationTimeoutId = null;
    this.animationRequestId = null;
  }

  private updateAfterWidth() {
    this.imageWidth = this.offsetWidth;
    this.afterImageContainerElement.style.width = `${this.offsetWidth}px`;
  }
}

window.customElements.define('img-comparison-slider', ImgComparisonSlider);
