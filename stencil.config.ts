import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'component',
  buildEs5: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      empty: true,
      copy: [{ src: 'styles' }],
    },
    {
      type: 'www',
      serviceWorker: null,
      empty: true,
      copy: [{ src: 'demo' }, { src: 'styles' }],
    },
  ],
  plugins: [sass()],
};
