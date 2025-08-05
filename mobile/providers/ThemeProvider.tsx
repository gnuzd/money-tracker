import React from 'react';
import { ColorSchemeName } from 'react-native';
import { defaultTheme, Theme } from '@/constants/Theme';
import { Colors } from '@/constants/Colors';

export const ThemeContext = React.createContext(null);

type Props = React.PropsWithChildren & { colorscheme?: ColorSchemeName };

export function ThemeProvider({ colorscheme = 'light', children }: Props) {
  const [state, dispatch] = React.useReducer(reducers, {
    ...defaultTheme,
    colors: Colors[colorscheme!],
  });

  const value: any = React.useMemo(() => [state, dispatch], [state]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export enum ThemeActionKind {
  'TOGGLE_THEME',
}

export type ThemeAction = { type: ThemeAction };

function reducers(state: Theme, action: ThemeAction) {
  switch (action.type) {
    default:
      return state;
  }
}
