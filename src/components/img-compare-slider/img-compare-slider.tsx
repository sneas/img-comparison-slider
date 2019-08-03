import { Component, h } from '@stencil/core';

@Component({
  tag: 'img-compare-slider',
  styleUrl: 'img-compare-slider.scss',
  shadow: true
})
export class ImgCompareSlider {
  private after?: HTMLElement;
  private slider?: HTMLInputElement;

  componentDidRender() {
    const redrawImage  = () => {
      this.after.style.width = `${this.slider.value}%`;
    };

    this.slider.addEventListener('input', redrawImage);
    this.slider.addEventListener('change', redrawImage);
    redrawImage();
  }

  render() {
    return <div>
      <slot name="before"></slot>
      <div ref={el => this.after = el as HTMLElement} class="after">
        <slot name="after"></slot>
      </div>
      <input ref={el => this.slider = el as HTMLInputElement} id="slider" type="range" min="0" max="100" step="0.5" />
    </div>;
  }
}
