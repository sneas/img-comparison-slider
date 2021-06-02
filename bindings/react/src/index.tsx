import React, { FC, AllHTMLAttributes, PropsWithChildren } from 'react';
import 'img-comparison-slider';

type ImgComparisonSliderProps = AllHTMLAttributes<HTMLElement>;

export const ImgComparisonSlider: FC<ImgComparisonSliderProps> = ({
  children,
  ...props
}: PropsWithChildren<ImgComparisonSliderProps>) =>
  React.createElement(
    'img-comparison-slider',
    Object.assign({}, props),
    children
  );
