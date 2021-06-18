import React, { FC, AllHTMLAttributes, PropsWithChildren } from 'react';

if (typeof document !== 'undefined') {
  import('img-comparison-slider');
}

type ImgComparisonSliderProps = AllHTMLAttributes<HTMLElement>;

export const ImgComparisonSlider: FC<ImgComparisonSliderProps> = ({
  children,
  ...props
}: PropsWithChildren<ImgComparisonSliderProps>) => {
  return React.createElement(
    'img-comparison-slider',
    Object.assign({}, props),
    children
  );
};
