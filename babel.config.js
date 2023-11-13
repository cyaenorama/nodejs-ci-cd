/* Plugins run before Presets. */

/* Plugin ordering is first to last. */
const plugins = [
  process.env.NODE_ENV === 'test'
    ? ['@babel/plugin-transform-runtime', { helpers: false }]
    : ['@babel/plugin-transform-runtime']
];

/* Preset ordering is reversed (last to first). */
const presets = ['@babel/preset-env'];

module.exports = api => {
  api.cache(true);

  return {
    assumptions: {
      setPublicClassFields: true
    },
    plugins,
    presets
  };
};
