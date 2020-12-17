import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'ImgComparisonSlider',
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      name: 'ImgComparisonSlider',
      file: 'dist/index.umd.js',
      format: 'umd',
      sourcemap: true,
      globals: {
        'vue-property-decorator': 'vuePropertyDecorator',
      },
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    'tslib',
    'vue',
    'vuex',
    'vuex-class',
    'vuetify',
    'vuetify/lib',
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true,
      module: 'es6',
      tsconfig: 'tsconfig.json',
      tsconfigOverride: { exclude: ['node_modules', 'src/main.ts', 'tests'] },
    }),
    commonjs(),
    terser(),
  ],
};
