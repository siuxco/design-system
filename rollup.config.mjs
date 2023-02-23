import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import jsx from 'acorn-jsx';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import fs from 'node:fs';
import rimraf from 'rimraf';

function cleanDistribution() {
  rimraf.sync('distribution/utils');
  rimraf.sync('distribution/es');
  rimraf.sync('distribution/components');
  rimraf.sync('distribution/fonts');
  for (const file of fs
    .readdirSync('./distribution')
    .filter((file) => file.endsWith('.js') || file.endsWith('.map') || file.endsWith('.css')))
    fs.unlinkSync(`./distribution/${file}`);
}

cleanDistribution();

export default [
  {
    cache: false,
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
    },
    input: './utils/utils.ts',
    output: [
      {
        file: 'distribution/utils.js',
        format: 'cjs',
      },
    ],
    // acornInjectPlugins: [jsx()],
    plugins: [
      typescript({
        include: ['utils/**/*.ts'],
        exclude: ['components/**/*.stories.(ts|tsx)', 'utils/links.js'],
        tsconfigOverride: {
          compilerOptions: { jsx: 'preserve', declaration: true },
        },
      }),
      commonjs({
        extensions: ['.js', '.ts', '.tsx', '.svg'],
      }),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
        exclude: ['node_modules/**'],
        include: ['utils/**/*.(ts)'],
        presets: [['@babel/preset-react']],
        babelHelpers: 'bundled',
      }),
      terser(),
    ],
  },
  {
    cache: false,
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
    },
    input: './components/index.ts',
    output: [
      {
        file: 'distribution/index.js',
        format: 'cjs',
      },
      {
        dir: 'distribution/es/',
        format: 'es',
        exports: 'named',
        preserveModules: true,
        sourcemap: true,
      },
    ],
    acornInjectPlugins: [jsx()],
    plugins: [
      url(),
      svgr(),
      image(),
      resolve({
        browser: true,
        mainFields: ['module', 'main', 'jsnext:main', 'browser'],
        dedupe: ['classNames', 'react', 'react-dom'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
      }),
      typescript({
        include: ['components/**/*.(ts|tsx)', 'utils/**/*.ts'],
        exclude: ['components/**/*.stories.(ts|tsx)', 'utils/storybookUtils.ts'],
        tsconfigOverride: {
          compilerOptions: { jsx: 'preserve', declaration: true },
        },
      }),
      commonjs({
        extensions: ['.js', '.ts', '.tsx', '.svg'],
      }),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
        exclude: ['node_modules/**'],
        include: ['components/**/*.(ts|tsx)'],
        presets: [['@babel/preset-react']],
        babelHelpers: 'bundled',
      }),
      external(),
      terser(),
    ],
    external: ['react', 'react-dom', 'tslib', 'utils.js'],
  },
];
