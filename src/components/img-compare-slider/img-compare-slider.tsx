import { Component, h } from '@stencil/core';

@Component({
  tag: 'img-compare-slider',
  styleUrl: 'img-compare-slider.scss',
  shadow: true
})
export class ImgCompareSlider {
  render() {
    return <div>
      <slot name="before"></slot>
      <div class="after">
        <slot name="after"></slot>
      </div>
      <input id="slider" type="range" min="0" max="100" step="0.5" />
    </div>;
  }
}
