import { TextInput, TextInputProps, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { ThemedText } from './ThemedText';

interface Props extends TextInputProps {
  label?: string;
}

export function ThemedTextInput({ label, ...rest }: Props) {
  const [theme] = useTheme();

  return (
    <View style={{ marginBottom: theme.space * 1 }}>
      {label && (
        <ThemedText type="defaultSemiBold" style={{ marginBottom: theme.space }}>
          {label}
        </ThemedText>
      )}

      <View>
        <TextInput
          style={{
            backgroundColor: theme.colors.background,
            borderWidth: theme.border,
            borderStyle: 'solid',
            borderColor: theme.colors?.base300,
            paddingBlock: theme.space * 3,
            paddingInline: theme.space * 4,
            borderRadius: theme.radiusField,
            marginBottom: theme.space * 2,
          }}
          {...rest}
        />
      </View>
    </View>
  );
}
