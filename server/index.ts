import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import jwt from 'jsonwebtoken';

import db from './src/db';
import { users } from './src/db/schema';
import { comparePassword, generateToken, hashPassword } from './src/utils/helpers';
import { eq } from 'drizzle-orm';

const saltRounds = 10;

const typeDefs = `

type User {
  id: ID
  name: String
  email: String
}

type Auth {
  user: User
  token: String
}

type Query {
  ping: String
}

type Mutation {
  login(email: String!, password: String!): Auth
  register(name: String!, email: String!, password: String!): Auth
}
`;

// FIXME: should implement ts for apollo server when breaking down types and resolvers
const resolvers = {
  Query: {
    ping: () => 'pong',
  },
  Mutation: {
    login: async (_parent, args, _context) => {
      const { email, password } = args;
      const list = await db.select().from(users).where(eq(users.email, email));

      if (!list.length) {
        throw Error('Not found');
      }

      const user = list[0]!;
      if (!comparePassword(password, user.hash_pw)) {
        throw Error('Invalid credential');
      }

      return { user, token: generateToken(user) };
    },
    register: async (_parent, args, _context) => {
      const list = await db
        .insert(users)
        .values({
          email: args.email,
          name: args.name,
          hash_pw: hashPassword(args.password),
        })
        .returning();
      const user = list[0]!;
      return { user, token: generateToken(user) };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀  Server ready at: ${url}`);

