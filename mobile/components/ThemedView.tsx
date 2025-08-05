import { useTheme } from '@/hooks/useTheme';
import { View, type ViewProps } from 'react-native';

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const [state] = useTheme();
  return <View style={[{ backgroundColor: state.colors?.background }, style]} {...otherProps} />;
}
