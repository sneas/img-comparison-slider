import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'component',
  buildEs5: true,
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'img-comparison-slider',
      proxiesFile: './bindings/react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: 'img-comparison-slider',
      proxiesFile: './bindings/vue/src/components.ts',
      includeDefineCustomElements: true,
    }),
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
