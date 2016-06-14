module.exports = function karmaconfig(config) {
  config.set({
    singleRun: true,
    frameworks: ['mocha', 'chai', 'commonjs'],
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': ['commonjs', 'babel' ],
      'test/**/*.js': ['commonjs', 'babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },
    browsers: ['PhantomJS']

  });
};
