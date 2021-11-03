import ts from 'rollup-plugin-typescript2';
import pkg from './package.json';

function createEntry(options) {
  const config = {
    input: './src/index.ts',
    external: ['vue'],
    output: {
      name: 'ImgComparisonSlider',
      file: options.file,
      format: options.format,
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
    plugins: [
      ts({
        check: options.format === 'es',
        tsconfigOverride: {
          compilerOptions: {
            declaration: options.format === 'es',
          },
          exclude: ['src', 'example'],
        },
      }),
    ],
  };

  return config;
}

export default [
  createEntry({ format: 'es', file: pkg.module }),
  createEntry({ format: 'cjs', file: pkg.main }),
];
