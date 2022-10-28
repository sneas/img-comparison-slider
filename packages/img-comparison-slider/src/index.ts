import styles from './styles.scss';
import { inBetween } from './inBetween';
import templateHtml from './template.html';
import { TABINDEX, RENDERED_CLASS } from './defaults';
import { isElementAffected } from './isElementAffected';

const templateElement = document.createElement('template');

templateElement.innerHTML = templateHtml;

type SlideKey = 'ArrowLeft' | 'ArrowRight';
type Direction = 1 | -1;

const KeySlideOffset: Record<SlideKey, Direction> = {
  ArrowLeft: -1,
  ArrowRight: 1,
};

type SlideDirection = 'horizontal' | 'vertical';
type KeyboardMode = 'enabled' | 'disabled';

const slideDirections: Array<SlideDirection> = ['horizontal', 'vertical'];

interface Point {
  x: number;
  y: number;
}

const getTouchPagePoint = (e: TouchEvent): Point => ({
  x: e.touches[0].pageX,
  y: e.touches[0].pageY,
});

const getMousePagePoint = (e: MouseEvent): Point => ({
  x: e.pageX,
  y: e.pageY,
});

const slideAnimationPeriod = 1000 / 60;

export class HTMLImgComparisonSliderElement extends HTMLElement {
  private firstElement: HTMLElement;
  private secondElement: HTMLElement;
  private handleElement: HTMLElement;

  private imageWidth: number;
  private imageHeight: number;
  private exposure = this.hasAttribute('value')
    ? parseFloat(this.getAttribute('value'))
    : 50;
  private slideOnHover = false;
  private slideDirection: SlideDirection = 'horizontal';

  private keyboard: KeyboardMode = 'enabled';

  private isMouseDown = false;

  private animationDirection: Direction | 0 = 0;
  private transitionTimer: number;

  private isFocused = false;

  public handle = false;

  public get value() {
    return this.exposure;
  }

  public set value(newValue: any) {
    const newExposure = parseFloat(newValue);

    if (newExposure === this.exposure) {
      return;
    }

    this.exposure = newExposure;
    this.enableTransition();
    this.setExposure();
  }

  public get hover() {
    return this.slideOnHover;
  }

  public set hover(newValue: any) {
    this.slideOnHover = newValue.toString().toLowerCase() !== 'false';
    this.removeEventListener('mousemove', this.onMouseMove);
    if (this.slideOnHover) {
      this.addEventListener('mousemove', this.onMouseMove);
    }
  }

  public get direction() {
    return this.slideDirection;
  }

  public set direction(newValue: any) {
    this.slideDirection = newValue.toString().toLowerCase();

    this.slide(0);

    this.firstElement.classList.remove(...slideDirections);

    if (!slideDirections.includes(this.slideDirection)) {
      return;
    }

    this.firstElement.classList.add(this.slideDirection);
  }

  static get observedAttributes() {
    return ['hover', 'direction'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;

    if (this.getAttribute('nonce')) {
      styleEl.setAttribute('nonce', this.getAttribute('nonce'));
    }
    shadowRoot.appendChild(styleEl);

    shadowRoot.appendChild(templateElement.content.cloneNode(true));

    this.firstElement = shadowRoot.getElementById('first');
    this.secondElement = shadowRoot.getElementById('second');
    this.handleElement = shadowRoot.getElementById('handle');
  }

  private connectedCallback() {
    if (!this.hasAttribute('tabindex')) {
      this.tabIndex = TABINDEX;
    }

    this.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    });

    const resizeObserver = new ResizeObserver(this.resetDimensions);
    resizeObserver.observe(this);

    this.setExposure(0);

    this.keyboard =
      this.hasAttribute('keyboard') &&
      this.getAttribute('keyboard') === 'disabled'
        ? 'disabled'
        : 'enabled';

    this.addEventListener('keydown', this.onKeyDown);
    this.addEventListener('keyup', this.onKeyUp);

    this.addEventListener('focus', this.onFocus);
    this.addEventListener('blur', this.onBlur);
    this.addEventListener('touchstart', this.onTouchStart, {
      passive: true,
    });
    this.addEventListener('touchmove', this.onTouchMove, {
      passive: false,
    });
    this.addEventListener('touchend', this.onTouchEnd);
    this.addEventListener('mousedown', this.onMouseDown);

    this.handle = this.hasAttribute('handle');

    this.hover = this.hasAttribute('hover')
      ? this.getAttribute('hover')
      : false;

    this.direction = this.hasAttribute('direction')
      ? this.getAttribute('direction')
      : 'horizontal';

    this.resetDimensions();
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

  private attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'hover') {
      this.hover = newValue;
    }

    if (name === 'direction') {
      this.direction = newValue;
    }

    if (name === 'keyboard') {
      this.keyboard = newValue === 'disabled' ? 'disabled' : 'enabled';
    }
  }

  private setExposure(increment = 0) {
    this.exposure = inBetween(this.exposure + increment, 0, 100);

    this.firstElement.style.setProperty(
      '--exposure',
      `${100 - this.exposure}%`
    );
  }

  private slide(increment = 0) {
    this.setExposure(increment);

    const event = new Event('slide');
    this.dispatchEvent(event);
  }

  private onMouseMove = (e: MouseEvent) => {
    if (this.isMouseDown || this.slideOnHover) {
      const currentPoint = getMousePagePoint(e);
      this.slideToPage(currentPoint);
    }
  };

  private bodyUserSelectStyle = '';

  private onMouseDown = (e: MouseEvent) => {
    if (this.slideOnHover) {
      return;
    }

    if (this.handle && !isElementAffected(this.handleElement, e)) {
      return;
    }

    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onWindowMouseUp);
    this.isMouseDown = true;
    this.enableTransition();

    const currentPoint = getMousePagePoint(e);
    this.slideToPage(currentPoint);

    this.focus();
    this.bodyUserSelectStyle = window.document.body.style.userSelect;
    window.document.body.style.userSelect = 'none';
  };

  private onWindowMouseUp = () => {
    this.isMouseDown = false;
    window.document.body.style.userSelect = this.bodyUserSelectStyle;
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onWindowMouseUp);
  };

  private touchStartPoint: Point | null = null;
  private isTouchComparing = false;
  private hasTouchMoved = false;

  private onTouchStart = (e: TouchEvent) => {
    if (this.handle && !isElementAffected(this.handleElement, e)) {
      return;
    }

    this.touchStartPoint = getTouchPagePoint(e);

    if (this.isFocused) {
      this.enableTransition();

      this.slideToPage(this.touchStartPoint);
    }
  };

  private onTouchMove = (e: TouchEvent) => {
    if (this.touchStartPoint === null) {
      return;
    }

    const currentPoint = getTouchPagePoint(e);

    if (this.isTouchComparing) {
      this.slideToPage(currentPoint);
      e.preventDefault();
      return false;
    }

    if (!this.hasTouchMoved) {
      const offsetY = Math.abs(currentPoint.y - this.touchStartPoint.y);
      const offsetX = Math.abs(currentPoint.x - this.touchStartPoint.x);

      if (
        (this.slideDirection === 'horizontal' && offsetY < offsetX) ||
        (this.slideDirection === 'vertical' && offsetY > offsetX)
      ) {
        this.isTouchComparing = true;
        this.focus();
        this.slideToPage(currentPoint);
        e.preventDefault();
        return false;
      }

      this.hasTouchMoved = true;
    }
  };

  private onTouchEnd = () => {
    this.isTouchComparing = false;
    this.hasTouchMoved = false;
    this.touchStartPoint = null;
  };

  private onBlur = () => {
    this.stopSlideAnimation();
    this.isFocused = false;
    this.firstElement.classList.remove('focused');
  };

  private onFocus = () => {
    this.isFocused = true;
    this.firstElement.classList.add('focused');
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (this.keyboard === 'disabled') {
      return;
    }

    const direction = KeySlideOffset[e.key];

    if (this.animationDirection === direction) {
      return;
    }

    if (direction === undefined) {
      return;
    }

    this.animationDirection = direction;
    this.startSlideAnimation();
  };

  private onKeyUp = (e: KeyboardEvent) => {
    if (this.keyboard === 'disabled') {
      return;
    }

    const direction = KeySlideOffset[e.key];

    if (direction === undefined) {
      return;
    }

    if (this.animationDirection !== direction) {
      return;
    }

    this.stopSlideAnimation();
  };

  private slideToPage(currentPoint: Point) {
    if (this.slideDirection === 'horizontal') {
      this.slideToPageX(currentPoint.x);
    }

    if (this.slideDirection === 'vertical') {
      this.slideToPageY(currentPoint.y);
    }
  }

  private slideToPageX(pageX: number) {
    const x = pageX - this.getBoundingClientRect().left - window.scrollX;
    this.exposure = (x / this.imageWidth) * 100;
    this.slide(0);
  }

  private slideToPageY(pageY: number) {
    const y = pageY - this.getBoundingClientRect().top - window.scrollY;
    this.exposure = (y / this.imageHeight) * 100;
    this.slide(0);
  }

  private enableTransition() {
    const transitionTime = 100;
    this.firstElement.style.setProperty(
      '--transition-time',
      `${transitionTime}ms`
    );

    this.transitionTimer = window.setTimeout(() => {
      this.firstElement.style.setProperty(
        '--transition-time',
        `var(--default-transition-time)`
      );
      this.transitionTimer = null;
    }, transitionTime);
  }

  private startSlideAnimation() {
    let lastTimestamp: number = null;
    let initialDirection = this.animationDirection;
    this.firstElement.style.setProperty(
      '--transition-time',
      `var(--keyboard-transition-time)`
    );
    const slide = (now: number) => {
      if (
        this.animationDirection === 0 ||
        initialDirection !== this.animationDirection
      ) {
        return;
      }

      if (lastTimestamp === null) {
        lastTimestamp = now;
      }

      const interval = now - lastTimestamp,
        distance = (interval / slideAnimationPeriod) * this.animationDirection;
      this.slide(distance);

      // This is necessary to speed up the key up event in Desktop Safari
      setTimeout(() => window.requestAnimationFrame(slide), 0);

      lastTimestamp = now;
    };

    window.requestAnimationFrame(slide);
  }

  private stopSlideAnimation() {
    this.animationDirection = 0;
    this.firstElement.style.setProperty(
      '--transition-time',
      `var(--default-transition-time)`
    );
  }

  private resetDimensions = () => {
    this.imageWidth = this.offsetWidth;
    this.imageHeight = this.offsetHeight;
  };
}
if (typeof window !== 'undefined') {
  window.customElements.define(
    'img-comparison-slider',
    HTMLImgComparisonSliderElement
  );
}
