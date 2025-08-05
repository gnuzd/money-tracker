type ColorParallet = {
  default: string;
  hover: string;
  content: string;
};

export type Color = {
  text: string;
  background: string;
  base100: string;
  base200: string;
  base300: string;
  baseContent: string;
  primary: ColorParallet;
  secondary: ColorParallet;
  neutral: ColorParallet;
  error?: ColorParallet;
};

export const Colors: { light: Color; dark: Color } = {
  light: {
    text: '#11181C',
    background: '#fff',
    base100: 'rgba(255, 255, 255, 1)',
    base200: 'rgba(237, 237, 237, 1)',
    base300: 'rgba(219, 219, 219, 1)',
    baseContent: 'rgba(47, 46, 50, 1)',
    primary: {
      default: 'rgba(80, 150, 248, 1)',
      content: 'rgba(255, 255, 255, 1)',
      hover: 'rgba(80, 150, 248, .8)',
    },
    secondary: {
      default: 'rgba(131, 137, 150, 1)',
      content: 'rgba(255, 255, 255, 1)',
      hover: 'rgba(131, 137, 150, .8)',
    },
    neutral: {
      default: 'rgba(0, 0, 0, 1)',
      content: 'rgba(255, 255, 255, 1)',
      hover: 'rgba(0, 0, 0, .8)',
    },
    error: {
      default: 'rgba(255, 100, 100, 1)',
      content: 'rgba(0, 0, 0, 1)',
      hover: 'rgba(255, 100, 100, 0.8)',
    },
  },
  //FIXME: update colors
  dark: {
    text: '#ECEDEE',
    background: '#151718',
  },
};
