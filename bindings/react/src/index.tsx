import React, { FC, AllHTMLAttributes, PropsWithChildren } from 'react';

if (typeof document !== 'undefined') {
  import('img-comparison-slider');
}

type ImgComparisonSliderProps = AllHTMLAttributes<HTMLElement> & {
  value?: number | string;
  hover?: boolean;
};

export const ImgComparisonSlider: FC<ImgComparisonSliderProps> = ({
  children,
  ...props
}: PropsWithChildren<ImgComparisonSliderProps>) => {
  const ref = React.createRef<ImgComparisonSliderProps>();
  React.useEffect(() => {
    if (props.value !== undefined) {
      ref.current.value = props.value;
    }
  }, [props.value, ref]);

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
