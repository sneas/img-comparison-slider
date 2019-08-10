# img-comparison-slider

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Features

* 📱 Looks great on mobile devices
* ⌨️ Keyboard support
* ☁️ Easy to install
* 🧩 Web component. Works with HTML, React, Angular, or Vue

## Installation

### HTML

```html
<script src="https://unpkg.com/img-comparison-slider@^1/dist/img-comparison-slider.js"></script>

<img-comparison-slider>
  <img slot="before" src="before.jpg">
  <img slot="after" src="after.jpg">
</img-comparison-slider>
```

### React

```bash
yarn add img-comparison-slider
```

```js
// index.js
import { defineCustomElements as defineImgComparisonSlider } from 'img-comparison-slider/loader';

defineImgComparisonSlider(window);
```

```jsx
render() {
    return (
      <img-comparison-slider>
        <img slot="before" src="before.jpg">
        <img slot="after" src="after.jpg>
      </split-me>
    )
}
```

## Angular

```bash
npm install --save img-comparison-slider
```

`CUSTOM_ELEMENTS_SCHEMA` should be added into the
`AppModule` and in every other modules that uses `img-comparison-slider`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

Define slider in `main.ts`:

```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target confg
import { defineCustomElements as defineImgComponentSlider } from 'img-comparison-slider/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineImgComponentSlider(window);
```

## Vue

```bash
npm install --save img-comparison-slider
```

Steps to reproduce

* importing the node module
* tell Vue to ignore the custom element tags (see https://vuejs.org/v2/api/#ignoredElements)
* bind `img-comparison-slider` code to the window object

```js
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'img-comparison-slider/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App)
}).$mount('#app');
```