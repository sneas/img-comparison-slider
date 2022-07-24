# ImgComparisonSlider

[![npm package](https://img.shields.io/npm/v/@img-comparison-slider/vue.svg)](https://www.npmjs.com/package/@img-comparison-slider/vue)

**Vue3** wrapper for
[img-comparison-slider](https://github.com/sneas/img-comparison-slider) component.

Refer to this [doc](https://github.com/sneas/img-comparison-slider/blob/master/docs/installation/vue.md) for **Vue2** support.

Usage examples: [https://img-comparison-slider.sneas.io/examples.html](https://img-comparison-slider.sneas.io/examples.html)

![Example](https://raw.githubusercontent.com/sneas/img-comparison-slider/master/docs/example.gif)

## Installation

```
npm install --save @img-comparison-slider/vue
```

## Usage

```vue
<template>
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img
      slot="first"
      style="width: 100%"
      src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
    />
    <img
      slot="second"
      style="width: 100%"
      src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
    />
    <!-- eslint-enable -->
  </ImgComparisonSlider>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: 'ExampleComponent',
  components: {
    ImgComparisonSlider,
  },
};
</script>
```
