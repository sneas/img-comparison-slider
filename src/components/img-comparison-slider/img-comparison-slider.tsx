import {Component, h, Listen, Element} from '@stencil/core';

const inBetween = (actual: number, min: number, max: number): number => {
  if (actual < min) {
    return min;
  }

  if (actual > max) {
    return max;
  }

  return actual;
}

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
  private hint?: HTMLElement;

  private imageWidth: number;
  private exposure = 50;
  private isMouseDown = false;

  componentDidRender() {
    this.slide(0);
    this.updateAfterWidth();
    this.el.setAttribute('tabindex', '0');
  }

  slide(increment = 0) {
    this.exposure = inBetween(this.exposure + increment, 0, 100);
    this.after.style.width = `${this.exposure}%`;
  }

  @Listen('keydown')
  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      this.slide(-1);
      return;
    }

    if (e.key === 'ArrowRight') {
      this.slide(1);
      return;
    }
  }

  @Listen('touchstart')
  @Listen('mousedown')
  onMouseDown(e: MouseEvent) {
    this.isMouseDown = true;
    this.slideToEvent(e);
  }

  @Listen('touchend')
  @Listen('mouseup')
  onMouseUp(e: MouseEvent) {
    this.isMouseDown = false;
    this.slideToEvent(e);
  }

  @Listen('mousemove')
  @Listen('touchmove')
  onMouseMove(e: MouseEvent) {
    if (this.isMouseDown) {
      this.slideToEvent(e);
    }
  }

  @Listen('mouseleave')
  onMouseLeave() {
    this.isMouseDown = false;
  }

  @Listen('resize', {target: 'window'})
  updateAfterWidth() {
    this.imageWidth = this.el.offsetWidth;
    this.afterImageContainer.style.width = `${this.el.offsetWidth}px`;
  }

  slideToEvent(e: MouseEvent) {
    const x = e.pageX - this.el.offsetLeft;
    this.exposure = (x / this.imageWidth) * 100;
    this.slide();
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
        <div ref={el => this.afterImageContainer = el as HTMLElement}>
          <slot name="after"></slot>
        </div>
      </div>
      <div class="hint" ref={el => this.hint = el as HTMLElement}></div>
    </div>;
  }
}
