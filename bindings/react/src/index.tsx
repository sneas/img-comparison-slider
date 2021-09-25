import React, {
  FC,
  AllHTMLAttributes,
  PropsWithChildren,
  ChangeEventHandler,
} from 'react';

if (typeof document !== 'undefined') {
  import('img-comparison-slider');
}

type HTMLImgComparisonSliderElement = HTMLElement & {
  value: number;
  hover: boolean;
};

type ImgComparisonSliderProps =
  AllHTMLAttributes<HTMLImgComparisonSliderElement> & {
    value?: number | string;
    hover?: boolean;
    onSlide?: ChangeEventHandler<HTMLImgComparisonSliderElement>;
  };

export const ImgComparisonSlider: FC<ImgComparisonSliderProps> = ({
  children,
  onSlide = () => null,
  ...props
}: PropsWithChildren<ImgComparisonSliderProps>) => {
  const ref = React.createRef<HTMLImgComparisonSliderElement>();
  React.useEffect(() => {
    if (props.value !== undefined) {
      ref.current.value = parseFloat(props.value.toString());
    }
  }, [props.value, ref]);

  React.useEffect(() => {
    // @ts-ignore
    ref.current.addEventListener('slide', onSlide);
  }, [ref]);

  return React.createElement(
    'img-comparison-slider',
    Object.assign(
      {
        class: props.className ? `${props.className} rendered` : 'rendered',
        // Align tabIndex between the web and React components
        // this code could be removed when
        // https://github.com/WICG/webcomponents/issues/762 is resolved.
        tabIndex: 0,
        ref,
      },
      props
    ),
    children
  );
};
