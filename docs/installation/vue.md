# Vue

```bash
npm install --save img-comparison-slider
```

Steps to reproduce

- importing the node module
- tell Vue to ignore the custom element tags (see https://vuejs.org/v2/api/#ignoredElements)
- bind `img-comparison-slider` code to the window object

```js
import Vue from 'vue';
import App from './App.vue';

import {
  applyPolyfills,
  defineCustomElements,
} from 'img-comparison-slider/loader';

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
  render: (h) => h(App),
}).$mount('#app');
```
