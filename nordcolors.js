const polar_night_colors = {
  0: '#2e3440',
  1: '#3b4252',
  2: '#434c5e',
  3: '#4c566a',
};

const snow_storm_colors = {
  4: '#d8dee9',
  5: '#e5e9f0',
  6: '#eceff4',
};

const frost_colors = {
  7: '#8fbcbb',
  8: '#88c0d0',
  9: '#81a1c1',
  10: '#5e81ac',
};

const aurora_colors = {
  11: '#bf616a',
  12: '#d08770',
  13: '#ebcb8b',
  14: '#a3be8c',
  15: '#b48ead',
};

const nord_colors = {
  ...polar_night_colors,
  ...snow_storm_colors,
  ...frost_colors,
  ...aurora_colors,
};

module.exports = {
  polar_night_colors: polar_night_colors,
  snow_storm_colors: snow_storm_colors,
  frost_colors: frost_colors,
  aurora_colors: aurora_colors,
  nord_colors: nord_colors,
};
