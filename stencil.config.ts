import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist',
      copy: [{ src: 'styles' }],
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'www',
      copy: [{ src: 'demo' }],
    },
    {
      type: 'www',
      copy: [{ src: 'styles' }],
    },
  ],
  plugins: [sass()],
};
