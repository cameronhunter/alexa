import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const production = process.env.NODE_ENV == 'production';
const dest = production ? 'build/index.min.js' : 'build/index.js';
const nonNull = array => array.filter(value => !!value);

export default {
  entry: 'src/index.js',
  dest,
  format: 'cjs',
  plugins: nonNull([
    babel({ babelrc: false, presets: ['es2015-rollup', 'stage-1'] }),
    production ? uglify() : null
  ])
};
