# ImgComparisonSlider

[![npm package](https://img.shields.io/npm/v/@img-comparison-slider/vue.svg)](https://www.npmjs.com/package/@img-comparison-slider/vue)

**Vue3** wrapper for
[img-comparison-slider](https://github.com/sneas/img-comparison-slider) component.

Refer to this [doc](https://github.com/sneas/img-comparison-slider/blob/master/docs/installation/vue.md) for **Vue2** support.

Usage examples: [https://sneas.github.io/img-comparison-slider](https://sneas.github.io/img-comparison-slider)

![Example](https://raw.githubusercontent.com/sneas/img-comparison-slider/master/docs/example.gif)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                            | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |

## Installation

```
npm install --save @img-comparison-slider/vue
```

## Usage

```jsx
// main.js
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
const app = createApp(App);
app.component('ImgComparisonSlider', ImgComparisonSlider);
app.mount('#app');
```

```vue
<template>
  <ImgComparisonSlider>
    <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
    <img
      slot="before"
      style="width: 100%"
      src="https://sneas.github.io/img-comparison-slider/demo/images/cat.jpg"
    />
    <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
    <img
      slot="after"
      style="width: 100%"
      src="https://sneas.github.io/img-comparison-slider/demo/images/dog.jpg"
    />
  </ImgComparisonSlider>
</template>
```
