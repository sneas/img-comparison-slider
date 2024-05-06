import { type HTMLImgComparisonSliderElement } from 'img-comparison-slider';
import {
  FC,
  AllHTMLAttributes,
  PropsWithChildren,
  ChangeEventHandler,
  forwardRef,
  ForwardedRef,
  useRef,
  useEffect,
  useImperativeHandle,
  createElement,
} from 'react';

if (typeof document !== 'undefined') {
  import('img-comparison-slider');
}

type ImgComparisonSliderProps =
  AllHTMLAttributes<HTMLImgComparisonSliderElement> & {
    value?: number | string;
    handle?: boolean;
    hover?: boolean;
    direction?: string;
    keyboard?: 'enabled' | 'disabled';
    onSlide?: ChangeEventHandler<HTMLImgComparisonSliderElement>;
    ref?: ForwardedRef<HTMLImgComparisonSliderElement>;
  };

export { HTMLImgComparisonSliderElement };

export const ImgComparisonSlider: FC<ImgComparisonSliderProps> = forwardRef(
  (
    {
      children,
      onSlide,
      value,
      className,
      ...props
    }: PropsWithChildren<ImgComparisonSliderProps>,
    ref: ForwardedRef<HTMLImgComparisonSliderElement>
  ) => {
    const sliderRef = useRef<HTMLImgComparisonSliderElement>();
    useEffect(() => {
      if (value !== undefined) {
        sliderRef.current.value = parseFloat(value.toString());
      }
    }, [value, sliderRef]);

    useEffect(() => {
      if (onSlide) {
        // @ts-ignore
        sliderRef.current.addEventListener('slide', onSlide);
      }
    }, []);

    useImperativeHandle(ref, () => sliderRef.current, [sliderRef]);

    return createElement(
      'img-comparison-slider',
      Object.assign(
        {
          class: className ? `${className} rendered` : 'rendered',
          // Align tabIndex between the web and React components
          // this code could be removed when
          // https://github.com/WICG/webcomponents/issues/762 is resolved.
          tabIndex: 0,
          ref: sliderRef,
        },
        props
      ),
      children
    );
  }
);
