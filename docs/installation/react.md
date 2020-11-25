🥕 For those who don't care about **IE11**:
[there is a simpler (and lighter)](../../bindings/react)
way to use `img-comparison-slider` in React applications.

# React App. IE11 Support

```bash
yarn add img-comparison-slider
```

```js
// index.js
import {
  defineCustomElements,
  applyPolyfills,
} from 'img-comparison-slider/loader';

applyPolyfills().then(() => defineCustomElements(window));
```

```jsx
render() {
    return (
      <img-comparison-slider>
        <img slot="before" src="before.jpg" />
        <img slot="after" src="after.jpg" />
      </img-comparison-slider>
    )
}
```
