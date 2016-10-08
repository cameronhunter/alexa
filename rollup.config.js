import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import inject from 'rollup-plugin-inject';

const isProduction = process.env.NODE_ENV === 'production';
const nonNull = array => array.filter(Boolean);

export default {
  entry: 'src/index.js',
  dest: isProduction ? './build/index.min.js' : './build/index.js',
  format: 'cjs',
  plugins: nonNull([
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-1'],
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    }),
    inject({
      exclude: 'node_modules/**',
      Promise: 'bluebird',
      'Object.values': 'object-values'
    }),
    isProduction ? uglify() : null
  ])
};
