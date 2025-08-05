import { Color, Colors } from './Colors';

export type Theme = {
  border: number;
  radiusBox: number;
  radiusField: number;
  space: number;
  colors: Color;
};

export const defaultTheme: Theme = {
  border: 1,
  radiusBox: 6,
  radiusField: 6,
  space: 4,
  colors: Colors.light,
};
