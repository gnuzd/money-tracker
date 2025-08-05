import { ApolloClient, InMemoryCache } from '@apollo/client';

// FIXME: add it into .env file
const uri = 'http://localhost:4000';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
