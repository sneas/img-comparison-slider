# img-comparison-slider

[![npm package](https://img.shields.io/npm/v/img-comparison-slider.svg)](https://www.npmjs.com/package/img-comparison-slider)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/img-comparison-slider)

Slider component for comparing images (before and after).

Usage examples: [https://sneas.github.io/img-comparison-slider](https://sneas.github.io/img-comparison-slider)

![Example](docs/example.gif)

## Key Features

- Mobile friendly
- Accessible
- Responsive
- Compact - less than 9 kB minified (Or less than 3 kB when gzipped)
- Compatible with modern frameworks ([React](bindings/react/README.md),
  [Angular](docs/installation/angular.md),
  [Vue2](docs/installation/vue.md),
  [Vue3](bindings/vue/README.md))
- Distributed through CDN or NPM

<!--
```
<custom-element-demo>
  <template>
    <script defer src="https://unpkg.com/img-comparison-slider@4/dist/index.js"></script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/img-comparison-slider@4/dist/styles.css"
    />

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
  defer
  src="https://unpkg.com/img-comparison-slider@4/dist/index.js"
></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/img-comparison-slider@4/dist/styles.css"
/>

<img-comparison-slider>
  <img slot="before" src="before.jpg" />
  <img slot="after" src="after.jpg" />
</img-comparison-slider>
```

### Frameworks Support

- [React](bindings/react/README.md)
- [Angular](docs/installation/angular.md)
- [Vue2](docs/installation/vue.md)
- [Vue3](bindings/vue/README.md)

## Styling

Some styling techniques and ideas could be, possibly, found in the [demo](https://sneas.github.io/img-comparison-slider).

The component items such as default handle or divider could be styled with the help of CSS3 variables.

Example:

```html
<style type="text/css">
  img-comparison-slider {
    --divider-width: 2px;
    --divider-color: #c0c0c0;
    --default-handle-opacity: 0.3;
  }
</style>
```

### Available variables

| Variable                   | Description                                     | Default value |
| -------------------------- | ----------------------------------------------- | ------------- |
| `--divider-width`          | Width of the vertical line dividing both images | `1px`         |
| `--divider-color`          | Color of the vertical line dividing both images | `#fff`        |
| `--default-handle-width`   | Width of the default handle                     | `50px`        |
| `--default-handle-color`   | Color of the default handle                     | `#fff`        |
| `--default-handle-opacity` | Opacity of the default handle                   | `1`           |

### Handle

The component's handle could be changed by assigning `slot="handle"` attribute to any element inside `img-comparison-slider`.
