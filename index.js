const { ApolloServer } = require('apollo-server');

const createServer = ({ typeDefs, resolvers }) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  return server;
};

module.exports = { createServer };