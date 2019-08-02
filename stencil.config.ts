import { Config } from '@stencil/core';

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
    }
    {
      type: 'www',
      copy: [
        { src: 'images' }
      ]
    }
  ]
};
