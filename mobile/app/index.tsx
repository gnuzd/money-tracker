import { gql, useQuery } from '@apollo/client';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const PingQuery = gql`
  query GetPing {
    ping
  }
`;

export default function Index() {
  const { data, loading, error } = useQuery(PingQuery);

  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator />
      </ThemedView>
    );
  }

  if (error) {
    console.log(error);
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Something went wrong.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome {data.ping}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
