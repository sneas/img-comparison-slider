# img-comparison-slider

[![npm package](https://img.shields.io/npm/v/img-comparison-slider.svg)](https://www.npmjs.com/package/img-comparison-slider)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/img-comparison-slider)

Slider component for comparing images (before and after).

Usage examples: [https://sneas.github.io/img-comparison-slider](https://sneas.github.io/img-comparison-slider)

![Example](docs/example.gif)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11 _([limited](docs/ie.md))_, Edge                                                                                                                                                                            | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     |

## Why yet another slider?

Because all existing solutions lack at least one of the features:

- Mobile friendly
- Accessible
- Responsive
- jQuery free
- Compatible with modern frameworks ([React](bindings/react/README.md),
  [Angular](docs/installation/angular.md),
  [Vue2](docs/installation/vue.md),
  [Vue3](bindings/vue/README.md))
- Distributed through CDN or NPM

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://unpkg.com/img-comparison-slider@3/dist/component/component.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/img-comparison-slider@3/dist/component/component.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/img-comparison-slider@3/dist/collection/styles/initial.css">

    <img-comparison-slider>
      <img slot="before" width="100%" src="https://sneas.github.io/img-comparison-slider/demo/images/before.webp">
      <img slot="after" width="100%" src="https://sneas.github.io/img-comparison-slider/demo/images/after.webp">
    </img-comparison-slider>
  </template>
</custom-element-demo>
```
-->

## Installation

### HTML

```html
<script
  type="module"
  src="https://unpkg.com/img-comparison-slider@3/dist/component/component.esm.js"
></script>
<script
  nomodule=""
  src="https://unpkg.com/img-comparison-slider@3/dist/component/component.js"
></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/img-comparison-slider@3/dist/collection/styles/initial.css"
/>

<img-comparison-slider>
  <img slot="before" src="before.jpg" />
  <img slot="after" src="after.jpg" />
</img-comparison-slider>
```

### Frameworks support

- [React](bindings/react/README.md)
- [Angular](docs/installation/angular.md)
- [Vue2](docs/installation/vue.md)
- [Vue3](bindings/vue/README.md)

## Styling

The component could be styled with the help of CSS3 variables.

Example:

```html
<style type="text/css">
  img-comparison-slider {
    --divider-width: 2px;
    --divider-color: #c0c0c0;
    --handle-opacity: 0.3;
  }
</style>
```

### Available variables

| Variable                  | Description                                     | Default value |
| ------------------------- | ----------------------------------------------- | ------------- |
| `--divider-width`         | Width of the vertical line dividing both images | `1px`         |
| `--divider-color`         | Color of the vertical line dividing both images | `#d7d7d7`     |
| `--handle-size`           | Size of the handle in the middle of divider     | `40px`        |
| `--handle-color`          | Color of the handle in the middle of divider    | `#d7d7d7`     |
| `--handle-opacity`        | Opacity of the handle                           | `0.5`         |
| `--handle-opacity-active` | On focus opacity of the handle                  | `0`           |
