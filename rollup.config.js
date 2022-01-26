import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      name: 'vue-stripe',
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      exports: 'named',
      name: 'VueStripe',
      file: 'dist/vue-stripe.js',
      format: 'umd',
    },
  ],
  plugins: [
    typescript(),
    terser(),
    vue(),
    resolve(),
    babel({
      runtimeHelpers: true,
      exclude: /node_modules/,
    }),
    postcss({
      plugins: [],
    }),
    commonjs(),
  ],
};
