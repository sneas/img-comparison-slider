import React, { FC, AllHTMLAttributes, PropsWithChildren } from 'react';
import { DEFAULT_TABINDEX } from '../../../src/defaults';

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
    Object.assign(
      {
        // Alight tabIndex between the web and React components
        // this code could be removed when
        // https://github.com/WICG/webcomponents/issues/762 is resolved.
        tabIndex: DEFAULT_TABINDEX,
      },
      props
    ),
    children
  );
};
