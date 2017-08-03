import babel from 'rollup-plugin-babel';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  entry: 'src/index.js',
  dest: isProduction ? './build/index.min.js' : './build/index.js',
  format: 'cjs',
  exports: 'named',
  external: [
    'uuid',
    'alexa-response',
    'alexa-constants',
    'ssml-jsx',
    'prop-types'
  ],
  plugins: [
    babel({
      babelrc: false,
      presets: [['alexa-app', { modules: false }]]
    }),
  ],
};
