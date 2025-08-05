import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { ApolloProvider } from '@apollo/client';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemeProvider } from '@/providers/ThemeProvider';
import client from '@/utils/apollo';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider colorscheme={colorScheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </ApolloProvider>
  );
}
