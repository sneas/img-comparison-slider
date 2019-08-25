# img-comparison-slider

Slider component to compare images before and after.

[![npm package](https://img.shields.io/npm/v/img-comparison-slider.svg)](https://www.npmjs.com/package/img-comparison-slider)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/img-comparison-slider)
[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d)](https://stenciljs.com)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11 *([limited](docs/ie.md))*, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Overview

This is the best comparison slider because it:

* Looks great on mobile devices
* Supports keyboard
* Responsive
* Works with plain HTML pages, React, Angular, or Vue
* Easy to install
* Lightweight ~7kb
* Zero dependencies

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://unpkg.com/img-comparison-slider@latest/dist/component/component.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/img-comparison-slider@latest/dist/component/component.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/img-comparison-slider@latest/dist/collection/styles/initial.css">
    
    <img-comparison-slider>
      <img slot="before" width="100%" src="https://sneas.github.io/img-comparison-slider/demo/images/before.jpg">
      <img slot="after" width="100%" src="https://sneas.github.io/img-comparison-slider/demo/images/after.jpg">
    </img-comparison-slider>
  </template>
</custom-element-demo>
```
-->

## Installation

### HTML

```html
<script type="module" src="https://unpkg.com/img-comparison-slider@latest/dist/component/component.esm.js"></script>
<script nomodule="" src="https://unpkg.com/img-comparison-slider@latest/dist/component/component.js"></script>
<link rel="stylesheet" href="https://unpkg.com/img-comparison-slider@latest/dist/collection/styles/initial.css">

<img-comparison-slider>
  <img slot="before" src="before.jpg">
  <img slot="after" src="after.jpg">
</img-comparison-slider>
```

### Frameworks support

* [React](docs/installation/react.md)
* [Angular](docs/installation/angular.md)
* [Vue](docs/installation/vue.md)

## Styling

The component could be styled with the help of CSS3 variables.

Example:

```html
<style type="text/css">
  img-comparison-slider {
    --divider: 3px solid #c0c0c0;
    --hint-opacity: 0.3;
  }
</style>
```

### Available variables

| Variable | Description | Default value |
| --- | --- | --- |
| `--divider` | Vertical line dividing before and after image | `1px solid #d7d7d7` |
| `--hint-size` | Size of hint arrows at the middle of divider | `40px` |
| `--hint-color` | Color of hint arrows at the middle of divider | `#d7d7d7` |
| `--hint-opacity` | Opacity of hint arrows | `0.5` |
| `--hint-opacity-active` | On focus opacity of hint arrows | `0` |