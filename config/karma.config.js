const babel = require('rollup-plugin-babel');
const vue = require('rollup-plugin-vue2');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './../test/index.spec.js',
    ],
    preprocessors: {
      './../test/index.spec.js': ['rollup'],
    },
    singleRun: true,
    browsers: ['PhantomJS'],
    rollupPreprocessor: {
      plugins: [
        vue(),
        babel({
          compact: false,
          exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
      ],
      // will help to prevent conflicts between different tests entries
      sourceMap: false,
      format: 'cjs',
    },
  });
};
