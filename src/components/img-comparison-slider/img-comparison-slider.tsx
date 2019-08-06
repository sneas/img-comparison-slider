import {Component, h, Listen} from '@stencil/core';

@Component({
  tag: 'img-comparison-slider',
  styleUrl: 'img-comparison-slider.scss',
  shadow: true
})
export class ImgComparisonSlider {
  private after?: HTMLElement;
  private afterContent?: HTMLElement;
  private before?: HTMLElement;
  private slider?: HTMLInputElement;
  private hint?: HTMLElement;
  private style?: HTMLStyleElement;
  private component?: HTMLElement;

  componentDidRender() {
    const refreshAfter  = () => {
      this.after.style.width = `${this.slider.value}%`;
      this.hint.style.left = `${this.slider.value}%`;
    };

    this.slider.addEventListener('input', refreshAfter);
    this.slider.addEventListener('change', refreshAfter);
    refreshAfter();

    this.slider.addEventListener('focus', () => {
      this.component.classList.add('focused');
    });

    this.slider.addEventListener('blur', () => {
      this.component.classList.remove('focused');
    });

    this.style.innerHTML = `
      .slider::-ms-thumb {
        height: ${this.before.offsetHeight}px !important;
      }
    `

    this.updateAfterWidth();
  }

  @Listen('resize', {target: 'window'})
  updateAfterWidth() {
    this.afterContent.style.width = `${this.component.offsetWidth}px`;
  }

  render() {
    return <div class="component" ref={el => this.component = el as HTMLElement}>
      <div ref={el => this.before = el as HTMLElement}>
        <slot name="before"></slot>
      </div>
      <div
        class="after"
        ref={el => this.after = el as HTMLElement}
      >
        <div ref={el => this.afterContent = el as HTMLElement}>
          <slot name="after"></slot>
        </div>
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
