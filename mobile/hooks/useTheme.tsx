import React from 'react';
import { ThemeContext, ThemeAction } from '@/providers/ThemeProvider';
import { Theme } from '@/constants/Theme';

export function useTheme(): [state: Theme, dispatch: React.Dispatch<ThemeAction>] {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}
