import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'img-compare-slider',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'www',
      copy: [
        { src: 'images' }
      ]
    }
  ],
  plugins: [
    sass()
  ]
};
