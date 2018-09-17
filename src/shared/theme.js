export const theme = {
  background: '#202840',
  depth: {
    orbitLandingpage: 10
  },
  navHeight: 60,
  pagePadding: 20,
  colors: {
    white: '#ffffff',
    dark: '#202840',
    light: '#5CCFE6',
    grey: '#A9A9A9'
  },
  fontFamily: {
    coco: 'Coco Gothic',
    roboto: 'Roboto'
  },
  fontWeight: {
    bold: 600,
    regular: 400,
    light: 200
  },
  breakpoints: {
    xs: 0,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
  }
};

export const themeLight = {
  ...theme,
  background: '#ffffff',
  colors: {
    white: '#000000',
    dark: '#5CCFE6',
    light: '#202840',
    grey: '#A9A9A9'
  }
};

export default theme;