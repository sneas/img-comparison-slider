# Vue

```bash
npm install --save img-comparison-slider
```

```js
import Vue from 'vue';
import App from './App.vue';

// Import the library
import 'img-comparison-slider';

Vue.config.productionTip = false;

// Tell Vue that the web component is present.
Vue.config.ignoredElements = [/img-comparison-slider/];

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```
