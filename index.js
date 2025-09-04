const { ApolloServer } = require('apollo-server');

function createServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolvers });
  return server;
}

module.exports = { createServer };