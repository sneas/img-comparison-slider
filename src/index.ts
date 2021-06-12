import styles from './styles.scss';
import { inBetween } from './inBetween';
import { isImg } from './isImg';
import { isSlot } from './isSlot';
import templateHtml from './template.html';

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

export class HTMLImgComparisonSliderElement extends HTMLElement {
  private beforeElement: HTMLElement;
  private afterElement: HTMLElement;
  private afterImageContainerElement: HTMLElement;

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
    shadowRoot.appendChild(templateElement.content.cloneNode(true));

    this.beforeElement = shadowRoot.getElementById('before');
    this.afterElement = shadowRoot.getElementById('after');
    this.afterImageContainerElement = shadowRoot.getElementById(
      'afterImageContainer'
    );
  }

  private connectedCallback() {
    this.shadowRoot.querySelectorAll('slot').forEach((slot) => {
      slot.addEventListener('slotchange', (e) => {
        if (!isSlot(e.target)) {
          return;
        }

        e.target.assignedElements().forEach(this.hydrate);
      });
    });

    this.querySelectorAll('img').forEach(this.hydrate);

    window.addEventListener('resize', this.resetWidth);

    this.slide(0);
    this.setAttribute('tabindex', '0');

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
    this.classList.add('rendered');
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

  private hydrate = (element: Element) => {
    if (!isImg(element)) {
      return;
    }

    if (element.classList.contains('hydrated')) {
      return;
    }

    element.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });

    element.addEventListener('load', this.resetWidth);
    element.classList.add('hydrated');
  };

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
    if (this.keyboardSlideAnimationTimeoutId) {
      return;
    }

    const key = e.key;

    if (!Object.keys(KeySlideOffset).includes(key)) {
      return;
    }

    this.startSlideAnimation(KeySlideOffset[key as SlideKey]);
  };

  private onKeyUp = (e: KeyboardEvent) => {
    if (!this.keyboardSlideAnimationTimeoutId) {
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

  private resetWidth = () => {
    this.imageWidth = this.offsetWidth;
    this.afterImageContainerElement.style.width = `${this.offsetWidth}px`;
  };
}

window.customElements.define(
  'img-comparison-slider',
  HTMLImgComparisonSliderElement
);
