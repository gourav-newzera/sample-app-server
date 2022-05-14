const {gql} = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    name: String!
    job: String!
    url: String!
    photo: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, job: String!, url: String!, photo: String!): User
    updateUser(
      id: ID!
      name: String
      job: String
      url: String
      photo: String
    ): User
    deleteUser(id: ID!): User
  }
`;
