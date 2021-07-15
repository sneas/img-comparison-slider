# ImgComparisonSlider

[![npm package](https://img.shields.io/npm/v/@img-comparison-slider/react.svg)](https://www.npmjs.com/package/@img-comparison-slider/react)

React wrapper for
[img-comparison-slider](https://github.com/sneas/img-comparison-slider) component.

Usage examples: [https://img-comparison-slider.sneas.io/examples.html](https://img-comparison-slider.sneas.io/examples.html)

![Example](https://raw.githubusercontent.com/sneas/img-comparison-slider/master/docs/example.gif)

## Installation

```
yarn add @img-comparison-slider/react
```

## Usage

```jsx
import { ImgComparisonSlider } from '@img-comparison-slider/react';

// ...
render() {
  return (
    <ImgComparisonSlider>
      <img slot="first" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
      <img slot="second" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
    </ImgComparisonSlider>
  );
}
```
