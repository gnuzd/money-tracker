import { StyleSheet, Text, type TextProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface ThemedTextProps extends TextProps {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  color?: 'text' | 'primary' | 'secondary';
  align?: 'left' | 'right' | 'center';
}

export function ThemedText({ style, type = 'default', color = 'text', align = 'left', ...rest }: ThemedTextProps) {
  const [theme] = useTheme();
  const themeColor = theme.colors[color];

  return (
    <Text
      style={[
        { color: typeof themeColor === 'object' ? themeColor.default : themeColor },
        styles[type],
        styles[align],
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
});
