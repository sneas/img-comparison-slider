# img-comparison-slider

[![npm package](https://img.shields.io/npm/v/img-comparison-slider.svg)](https://www.npmjs.com/package/img-comparison-slider)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/img-comparison-slider)

## Slider Component for Comparing Images (Before and After).

Usage examples: [https://img-comparison-slider.sneas.io/examples.html](https://img-comparison-slider.sneas.io/examples.html)

![Example](docs/example.gif)

## Most Important Features

- Mobile friendly
- Accessible
- Responsive
- Compact - less than 9 kB minified (Or less than 3 kB if gzipped)
- Compatible with modern frameworks ([React](bindings/react/README.md),
  [Angular](docs/installation/angular.md),
  [Vue2](docs/installation/vue.md),
  [Vue3](bindings/vue/README.md))
- Distributed via CDN or NPM

<!--
```
<custom-element-demo>
  <template>
    <script defer src="https://unpkg.com/img-comparison-slider@7/dist/index.js"></script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/img-comparison-slider@7/dist/styles.css"
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

### HTML

```html
<script
  defer
  src="https://unpkg.com/img-comparison-slider@7/dist/index.js"
></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/img-comparison-slider@7/dist/styles.css"
/>

<img-comparison-slider>
  <img slot="first" src="before.jpg" />
  <img slot="second" src="after.jpg" />
</img-comparison-slider>
```

### Frameworks Support

- [React](bindings/react/README.md)
- [Angular](docs/installation/angular.md)
- [Vue2](docs/installation/vue.md)
- [Vue3](bindings/vue/README.md)

## Supported Attributes

Besides the default `HTMLElement` attributes such as `class`, `tabindex`, `title`, etc., `img-comparison-slider` supports:

| Attribute | Description                                     | Default | Available |
| --------- | ----------------------------------------------- | ------- | --------- |
| `value`   | Position of the divider in percents.            | `50`    | `0..100`  |
| `hover`   | Automatically slide on mouse over.              | `false` |           |
| `nonce`   | Define nonce which gets passed to inline style. |         |           |

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

| Variable                   | Description                                                | Default value | Example value                    |
| -------------------------- | ---------------------------------------------------------- | ------------- | -------------------------------- |
| `--divider-width`          | Width of the vertical line separating both images          | `1px`         | `1em`                            |
| `--divider-color`          | Color of the vertical line separating the two images       | `#fff`        | `rgba(0, 0, 0, 0.5)`             |
| `--divider-shadow`         | Shadow cast by the vertical line separating the two images | `none`        | `0px 0px 5px rgba(0, 0, 0, 0.5)` |
| `--default-handle-width`   | Width of the default handle                                | `50px`        |                                  |
| `--default-handle-color`   | Color of the default handle                                | `#fff`        | `rgba(0, 0, 0, 0.5)`             |
| `--default-handle-opacity` | Opacity of the default handle                              | `1`           | `0.3`                            |
| `--default-handle-shadow`  | Shadow cast by the default handle                          | `none`        | `0px 0px 5px rgba(0, 0, 0, 1)`   |

### Handle

The handle of the component can be changed by assigning the attribute `slot="handle"` to any element within `img-comparison-slider`.
