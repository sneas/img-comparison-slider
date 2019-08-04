import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'img-comparison-slider',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist',
      copy: [
        { src: 'styles' }
      ]
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
    },
    {
      type: 'www',
      copy: [
        { src: 'styles' }
      ]
    }
  ],
  plugins: [
    sass()
  ]
};
