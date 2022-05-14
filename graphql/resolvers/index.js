const queries = require('./queries');
const mutations = require('./mutations');

module.exports = {
  Query: {
    ...queries.Query,
  },
  Mutation: {
    ...mutations.Mutation,
  },
};
