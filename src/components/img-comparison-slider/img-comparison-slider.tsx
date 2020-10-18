import { Component, h, Listen, Element } from '@stencil/core';
import { inBetween } from '../../utils/inBetween';

export interface Point {
  x: number;
  y: number;
}

const getTouchPagePoint = (e: TouchEvent): Point => ({
  x: e.touches[0].pageX,
  y: e.touches[0].pageY,
});

type SlideKey = 'ArrowLeft' | 'ArrowRight';

const KeySlideOffset: Record<SlideKey, number> = {
  ArrowLeft: -1,
  ArrowRight: 1,
};

@Component({
  tag: 'img-comparison-slider',
  styleUrl: 'img-comparison-slider.scss',
  shadow: true,
})
export class ImgComparisonSlider {
  @Element() el: HTMLElement;
  private after?: HTMLElement;
  private afterImageContainer?: HTMLElement;
  private before?: HTMLElement;

  private imageWidth: number;
  private exposure = 50;
  private isMouseDown = false;

  private keyboardSlideAnimationTimeoutId: number;
  private animationRequestId: number;
  private transitionTimer: number;

  private isFocused = false;

  componentWillLoad() {
    this.el.querySelectorAll('img').forEach((img) => {
      img.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });

      img.addEventListener('load', () => {
        this.updateAfterWidth();
      });
    });
  }

  componentDidRender() {
    this.slide(0);
    this.updateAfterWidth();
    this.el.setAttribute('tabindex', '0');
  }

  componentDidUnload() {
    if (this.transitionTimer) {
      window.clearTimeout(this.transitionTimer);
    }
  }

  slide(increment = 0, transition = false) {
    this.exposure = inBetween(this.exposure + increment, 0, 100);

    if (transition) {
      const transitionTime = 100;
      this.after.style.transition = `width ${transitionTime}ms`;

      this.transitionTimer = window.setTimeout(() => {
        this.after.style.transition = null;
        this.transitionTimer = null;
      }, transitionTime);
    }

    this.after.style.width = `${this.exposure}%`;
  }

  @Listen('keydown')
  onKeyDown(e: KeyboardEvent) {
    if (this.keyboardSlideAnimationTimeoutId) {
      return;
    }

    const key = e.key;

    if (!Object.keys(KeySlideOffset).includes(key)) {
      return;
    }

    this.startSlideAnimation(KeySlideOffset[key as SlideKey]);
  }

  @Listen('keyup')
  onKeyUp(e: KeyboardEvent) {
    if (!this.keyboardSlideAnimationTimeoutId) {
      return;
    }

    if (!Object.keys(KeySlideOffset).includes(e.key)) {
      return;
    }

    this.stopSlideAnimation();
  }

  @Listen('mousedown')
  onMouseDown(e: MouseEvent) {
    this.isMouseDown = true;
    this.slideToPageX(e.pageX, true);
    this.el.focus();
  }

  @Listen('mouseup', { target: 'window' })
  onMouseUp(e: MouseEvent | TouchEvent) {
    this.isMouseDown = false;
  }

  @Listen('mousemove', { passive: false })
  onMouseMove(e: MouseEvent) {
    if (this.isMouseDown) {
      this.slideToPageX(e.pageX);
    }
  }

  touchStartPoint: Point;
  isTouchComparing = false;
  hasTouchMoved = false;

  @Listen('touchstart')
  onTouchStart(e: TouchEvent) {
    this.touchStartPoint = getTouchPagePoint(e);

    if (this.isFocused) {
      this.slideToPageX(e.touches[0].pageX, true);
    }
  }

  @Listen('touchmove', { passive: false })
  onTouchMove(e: TouchEvent) {
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
        this.el.focus();
        this.slideToPageX(e.touches[0].pageX, true);
        e.preventDefault();
        return false;
      }

      this.hasTouchMoved = true;
    }
  }

  @Listen('touchend')
  touchEnd() {
    this.isTouchComparing = false;
    this.hasTouchMoved = false;
  }

  @Listen('blur')
  onBlur() {
    this.stopSlideAnimation();
    this.isFocused = false;
  }

  @Listen('focus')
  onFocus() {
    this.isFocused = true;
  }

  @Listen('resize', { target: 'window' })
  updateAfterWidth() {
    this.imageWidth = this.el.offsetWidth;
    this.afterImageContainer.style.width = `${this.el.offsetWidth}px`;
  }

  slideToPageX(pageX: number, transition = false) {
    const x = pageX - this.el.getBoundingClientRect().left;
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

  render() {
    return (
      <div>
        <div class="before" ref={(el) => (this.before = el as HTMLElement)}>
          <slot name="before"></slot>
        </div>
        <div class="after" ref={(el) => (this.after = el as HTMLElement)}>
          <div class="hint-wrapper">
            <slot name="hint">
              <div class="hint"></div>
            </slot>
          </div>
          <div class="after-overlay">
            <div ref={(el) => (this.afterImageContainer = el as HTMLElement)}>
              <slot name="after"></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
