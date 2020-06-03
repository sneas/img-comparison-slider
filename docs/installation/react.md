# React

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
        <img slot="before" src="before.jpg" />
        <img slot="after" src="after.jpg" />
      </img-comparison-slider>
    )
}
```
