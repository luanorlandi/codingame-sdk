import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
  input: 'src/compete/contest/code-of-kutulu/index.js',
  output: {
    format: 'cjs',
  },
  plugins: [
    json(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers',
        'transform-class-properties',
      ],
    }),
  ],
};
