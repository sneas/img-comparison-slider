import {Component, h, Listen, Element} from '@stencil/core';

const inBetween = (actual: number, min: number, max: number): number => {
  if (actual < min) {
    return min;
  }

  if (actual > max) {
    return max;
  }

  return actual;
};

type SlideKey = 'ArrowLeft' | 'ArrowRight';

const KeySlideOffset: Record<SlideKey, number> = {
  'ArrowLeft': -1,
  'ArrowRight': 1,
};

@Component({
  tag: 'img-comparison-slider',
  styleUrl: 'img-comparison-slider.scss',
  shadow: true
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

  componentWillLoad() {
    this.el.querySelectorAll('img').forEach(img => {
      img.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });

      img.addEventListener('load', () => {
        this.updateAfterWidth();
      });
    })
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
      }, transitionTime)
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

  @Listen('touchstart')
  @Listen('mousedown')
  onMouseDown(e: MouseEvent) {
    this.isMouseDown = true;
    this.slideToEvent(e, true);
    this.el.focus();
  }

  @Listen('touchend')
  @Listen('mouseup', {target: 'window'})
  onMouseUp(e: MouseEvent) {
    this.isMouseDown = false;
  }

  @Listen('mousemove')
  @Listen('touchmove')
  onMouseMove(e: MouseEvent) {
    if (this.isMouseDown) {
      this.slideToEvent(e);
    }
  }

  @Listen('blur')
  onBlur() {
    this.stopSlideAnimation();
  }

  @Listen('resize', {target: 'window'})
  updateAfterWidth() {
    this.imageWidth = this.el.offsetWidth;
    this.afterImageContainer.style.width = `${this.el.offsetWidth}px`;
  }

  slideToEvent(e: MouseEvent, transition = false) {
    const x = e.pageX - this.el.offsetLeft;
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
    }

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
    return <div>
      <div ref={el => this.before = el as HTMLElement}>
        <slot name="before"></slot>
      </div>
      <div
        class="after"
        ref={el => this.after = el as HTMLElement}
      >
        <div class="hint"></div>
        <div class="after-overlay">
          <div ref={el => this.afterImageContainer = el as HTMLElement}>
            <slot name="after"></slot>
          </div>
        </div>
      </div>
    </div>;
  }
}
