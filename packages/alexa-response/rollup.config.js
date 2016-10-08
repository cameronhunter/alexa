import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const isProduction = process.env.NODE_ENV == 'production';
const nonNull = array => array.filter(value => !!value);

export default {
  entry: 'src/index.js',
  dest: isProduction ? 'index.min.js' : 'index.js';,
  format: 'cjs',
  plugins: nonNull([
    babel({ babelrc: false, presets: ['es2015-rollup', 'stage-1'] }),
    isProduction ? uglify() : null
  ])
};
