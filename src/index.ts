import styles from './styles.scss';
import { inBetween } from './inBetween';
import templateHtml from './template.html';
import { TABINDEX, RENDERED_CLASS } from './defaults';

const templateElement = document.createElement('template');

templateElement.innerHTML = `<style>${styles}</style>${templateHtml}`;

type SlideKey = 'ArrowLeft' | 'ArrowRight';

const KeySlideOffset: Record<SlideKey, number> = {
  ArrowLeft: -1,
  ArrowRight: 1,
};

interface Point {
  x: number;
  y: number;
}

const getTouchPagePoint = (e: TouchEvent): Point => ({
  x: e.touches[0].pageX,
  y: e.touches[0].pageY,
});

const slideAnimationFps = 60;
const slideAnimationTimout = 1000 / slideAnimationFps;

export class HTMLImgComparisonSliderElement extends HTMLElement {
  private firstElement: HTMLElement;
  private firstImageContainerElement: HTMLElement;
  private secondElement: HTMLElement;

  private imageWidth: number;
  private exposure = 50;
  private isMouseDown = false;

  private isAnimating: boolean;
  private transitionTimer: number;

  private isFocused = false;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateElement.content.cloneNode(true));

    this.firstElement = shadowRoot.getElementById('first');
    this.firstImageContainerElement = shadowRoot.getElementById(
      'firstImageContainer'
    );
    this.secondElement = shadowRoot.getElementById('second');
  }

  private connectedCallback() {
    if (!this.hasAttribute('tabindex')) {
      this.tabIndex = TABINDEX;
    }

    this.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    });

    const resizeObserver = new ResizeObserver(this.resetWidth);
    resizeObserver.observe(this);

    this.slide(0);

    this.addEventListener('keydown', this.onKeyDown);
    this.addEventListener('keyup', this.onKeyUp);
    this.addEventListener('focus', this.onFocus);
    this.addEventListener('blur', this.onBlur);
    this.addEventListener('touchstart', this.onTouchStart);
    this.addEventListener('touchmove', this.onTouchMove, {
      passive: false,
    });
    this.addEventListener('touchend', this.onTouchEnd);
    this.addEventListener('mousedown', this.onMouseDown);

    this.resetWidth();
    if (!this.classList.contains(RENDERED_CLASS)) {
      this.classList.add(RENDERED_CLASS);
    }

    if (this.querySelectorAll('[slot="before"], [slot="after"]').length > 0) {
      console.warn(
        '<img-comparison-slider>: ' +
          'slot names "before" and "after" are deprecated and soon won\'t be supported. ' +
          'Please use slot="first" instead of slot="after", and slot="second" instead of slot="before".'
      );
    }
  }

  private disconnectedCallback() {
    if (this.transitionTimer) {
      window.clearTimeout(this.transitionTimer);
    }
  }

  public reset() {
    this.exposure = 50;
    this.slide(0);
  }

  private slide(increment = 0) {
    this.exposure = inBetween(this.exposure + increment, 0, 100);

    this.firstElement.style.setProperty(
      '--exposure',
      `${100 - this.exposure}%`
    );
  }

  private onWindowMouseMove = (e: MouseEvent) => {
    /**
     * This dynamic window.onmousemove event handler
     * registers on mousedown and removes on mouse up.
     * The whole mumbo-jumbo is needed to capture
     * mouse events outside of component. This provides
     * better user experience.
     */

    if (this.isMouseDown) {
      this.slideToPageX(e.pageX);
    }
  };

  private bodyUserSelectStyle = '';

  private onMouseDown = (e: MouseEvent) => {
    window.addEventListener('mousemove', this.onWindowMouseMove);
    window.addEventListener('mouseup', this.onWindowMouseUp);
    this.isMouseDown = true;
    this.slideToPageX(e.pageX, true);
    this.focus();
    this.bodyUserSelectStyle = window.document.body.style.userSelect;
    window.document.body.style.userSelect = 'none';
  };

  private onWindowMouseUp = () => {
    this.isMouseDown = false;
    window.document.body.style.userSelect = this.bodyUserSelectStyle;
    window.removeEventListener('mousemove', this.onWindowMouseMove);
    window.removeEventListener('mouseup', this.onWindowMouseUp);
  };

  private touchStartPoint: Point;
  private isTouchComparing = false;
  private hasTouchMoved = false;

  private onTouchStart = (e: TouchEvent) => {
    this.touchStartPoint = getTouchPagePoint(e);

    if (this.isFocused) {
      this.slideToPageX(e.touches[0].pageX, true);
    }
  };

  private onTouchMove = (e: TouchEvent) => {
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
  };

  private onTouchEnd = () => {
    this.isTouchComparing = false;
    this.hasTouchMoved = false;
  };

  private onBlur = () => {
    this.stopSlideAnimation();
    this.isFocused = false;
  };

  private onFocus = () => {
    this.isFocused = true;
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;

    const key = e.key;

    if (KeySlideOffset[key] === undefined) {
      return;
    }

    this.startSlideAnimation(KeySlideOffset[key as SlideKey]);
  };

  private onKeyUp = (e: KeyboardEvent) => {
    if (!this.isAnimating) {
      return;
    }

    if (!Object.keys(KeySlideOffset).includes(e.key)) {
      return;
    }

    this.stopSlideAnimation();
  };

  private slideToPageX(pageX: number, transition = false) {
    const x = pageX - this.getBoundingClientRect().left - window.scrollX;
    this.exposure = (x / this.imageWidth) * 100;
    this.enableTransition();
    this.slide(0);
  }

  private enableTransition() {
    const transitionTime = 100;
    this.firstElement.style.setProperty(
      '--transition-time',
      `${transitionTime}ms`
    );

    this.transitionTimer = window.setTimeout(() => {
      this.firstElement.style.setProperty('--transition-time', `0ms`);
      this.transitionTimer = null;
    }, transitionTime);
  }

  private startSlideAnimation(offset: number) {
    let lastTimestamp: number = null;
    const slide = (now: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = now;
      }

      const delta = now - lastTimestamp,
        distance = (delta / slideAnimationTimout) * offset;
      this.slide(distance);
      if (this.isAnimating) {
        window.requestAnimationFrame(slide);
        lastTimestamp = now;
      }
    };

    window.requestAnimationFrame(slide);
  }

  private stopSlideAnimation() {
    if (!this.isAnimating) {
      return;
    }

    this.isAnimating = false;
  }

  private resetWidth = () => {
    this.imageWidth = this.offsetWidth;
  };
}

window.customElements.define(
  'img-comparison-slider',
  HTMLImgComparisonSliderElement
);
