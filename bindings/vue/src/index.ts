import { defineComponent, h } from 'vue';
import 'img-comparison-slider';

export const ImgComparisonSlider = defineComponent({
  name: 'ImgComparisonSlider',
  setup(props, { slots }) {
    return () => h('img-comparison-slider', slots.default());
  },
});
