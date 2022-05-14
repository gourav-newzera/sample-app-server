const {ApolloServer} = require('apollo-server');

const resolvers = require('./graphql/resolvers/index');
const users = require('./graphql/typeDefs/user');
const sql = require('./sql');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [users],
  resolvers,
  csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
