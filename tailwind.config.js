module.exports = {
  theme: {
    extend: {
      opacity: {
        90: '.9',
      },
      color: {
        spotify: '#1DB954',
      },
    },
    filter: {
      blur: 'blur(8px)',
    },
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [require('tailwindcss-filters')],
}
