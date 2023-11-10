# img-comparison-slider

[![npm package](https://img.shields.io/npm/dm/img-comparison-slider?style=flat-square&label=npm&color=blue)](https://www.npmjs.com/package/img-comparison-slider)
[![](https://img.shields.io/jsdelivr/npm/hm/img-comparison-slider?style=flat-square&color=blue&label=jsDelivr)](https://www.jsdelivr.com/package/npm/img-comparison-slider)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/img-comparison-slider)

## Slider Component for Comparing Images (Before and After).

Usage examples: [https://img-comparison-slider.sneas.io/examples.html](https://img-comparison-slider.sneas.io/examples.html)

![Example](docs/example.gif)

## Most Important Features

- Mobile friendly
- Accessible
- Responsive
- Compact - less than 12 kB minified (Or less than 4 kB if gzipped)
- Compatible with modern frameworks ([React](packages/react/README.md),
  [Angular](docs/installation/angular.md),
  [Vue2](docs/installation/vue.md),
  [Vue3](packages/vue/README.md))
- Distributed via CDN or NPM

<!--
```
<custom-element-demo>
  <template>
    <script defer src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css"
    />

    <img-comparison-slider>
      <img slot="first" width="100%" src="https://img-comparison-slider.sneas.io/demo/images/before.webp">
      <img slot="second" width="100%" src="https://img-comparison-slider.sneas.io/demo/images/after.webp">
    </img-comparison-slider>
  </template>
</custom-element-demo>
```
-->

## Installation

### Browser Requirements

- Support for [ECMAScript 2015 (ES6)](https://caniuse.com/?search=es6). Use [Babel](https://babeljs.io/docs/en/babel-preset-env) if needed.
- Support for [Custom Elements (V1)](https://caniuse.com/?search=custom%20elements%20v1) and [ShadowDOM (V1)](https://caniuse.com/?search=shadowdom%20v1). Use [Polyfills](https://www.webcomponents.org/polyfills) if support for older browsers is needed.
- Support for [CSS Variables (Custom Properties)](https://caniuse.com/?search=css%20custom%20properties). [Polyfill](https://github.com/nuxodin/ie11CustomProperties) it for IE11.

### HTML

```html
<script
  defer
  src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css"
/>

<img-comparison-slider>
  <img slot="first" src="before.jpg" />
  <img slot="second" src="after.jpg" />
</img-comparison-slider>
```

### Frameworks Support

- [React](packages/react/README.md)
- [Angular](docs/installation/angular.md)
- [Vue2](docs/installation/vue.md)
- [Vue3](packages/vue/README.md)

## Supported Attributes

Besides the default `HTMLElement` attributes such as `class`, `tabindex`, `title`, etc., `img-comparison-slider` supports:

| Attribute   | Description                                               | Default      | Available                |
| ----------- | --------------------------------------------------------- | ------------ | ------------------------ |
| `value`     | Position of the divider in percents.                      | `50`         | `0..100`                 |
| `hover`     | Automatically slide on mouse over.                        | `false`      |                          |
| `direction` | Set slider direction.                                     | `horizontal` | `horizontal`, `vertical` |
| `nonce`     | Define nonce which gets passed to inline style.           |              |                          |
| `keyboard`  | Enable/disable slider position control with the keyboard. | `enabled`    | `enabled`, `disabled`    |
| `handle`    | Enable/disable dragging by handle only.                   | `false`      | `true`, `false`          |

## Events

The component emits `slide` event when the slider position is changed by user.

## Styling

Some styling techniques and ideas can be found in [examples](https://img-comparison-slider.sneas.io/examples.html).

The component elements like the default handle or the separator line could be styled using CSS3 variables.

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

### Available Variables

| Variable                   | Description                                                                              | Default value | Example value                    |
| -------------------------- | ---------------------------------------------------------------------------------------- | ------------- | -------------------------------- |
| `--divider-width`          | Width of the vertical line separating both images                                        | `1px`         | `1em`                            |
| `--divider-color`          | Color of the vertical line separating the two images                                     | `#fff`        | `rgba(0, 0, 0, 0.5)`             |
| `--divider-shadow`         | Shadow cast by the vertical line separating the two images                               | `none`        | `0px 0px 5px rgba(0, 0, 0, 0.5)` |
| `--handle-position-start`  | Handle position on the divider axis. In case the handle must be displaced off the center | `50%`         |                                  |
| `--default-handle-width`   | Width of the default handle                                                              | `50px`        |                                  |
| `--default-handle-color`   | Color of the default handle                                                              | `#fff`        | `rgba(0, 0, 0, 0.5)`             |
| `--default-handle-opacity` | Opacity of the default handle                                                            | `1`           | `0.3`                            |
| `--default-handle-shadow`  | Shadow cast by the default handle                                                        | `none`        | `0px 0px 5px rgba(0, 0, 0, 1)`   |

### Handle

The handle of the component can be changed by assigning the attribute `slot="handle"` to any element within `img-comparison-slider`.
