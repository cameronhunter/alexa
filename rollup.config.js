import babel from 'rollup-plugin-babel';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  entry: 'src/index.js',
  dest: isProduction ? './build/index.min.js' : './build/index.js',
  format: 'cjs',
  exports: 'named',
  external: ['uuid', 'alexa-constants', 'ssml-jsx'],
  plugins: [
    babel({
      babelrc: false,
      presets: [['env', { targets: { node: 6.10 }, modules: false }]],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread',
        'transform-export-extensions',
        ['transform-react-jsx', { pragma: 'ssml' }]
      ]
    })
  ]
};
