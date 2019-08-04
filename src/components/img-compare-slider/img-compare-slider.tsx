import { Component, h } from '@stencil/core';

@Component({
  tag: 'img-compare-slider',
  styleUrl: 'img-compare-slider.scss',
  shadow: true
})
export class ImgCompareSlider {
  private after?: HTMLElement;
  private before?: HTMLElement;
  private slider?: HTMLInputElement;
  private hint?: HTMLElement;
  private style?: HTMLStyleElement;

  componentDidRender() {
    const refreshAfter  = () => {
      this.after.style.width = `${this.slider.value}%`;
      this.hint.style.left = `${this.slider.value}%`;
    };

    this.slider.addEventListener('input', refreshAfter);
    this.slider.addEventListener('change', refreshAfter);
    refreshAfter();

    this.style.innerHTML = `
      .slider::-ms-thumb {
        height: ${this.before.offsetHeight}px !important;
      }
    `
  }

  render() {
    return <div class="component">
      <div ref={el => this.before = el as HTMLElement}>
        <slot name="before"></slot>
      </div>
      <div
        class="after"
        ref={el => this.after = el as HTMLElement}
      >
        <slot name="after"></slot>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="0.5"
        class="slider"
        ref={el => this.slider = el as HTMLInputElement}
      />
      <div class="hint" ref={el => this.hint = el as HTMLElement}></div>
      <style type="text/css" ref={el => this.style = el as HTMLStyleElement}></style>
    </div>;
  }
}
