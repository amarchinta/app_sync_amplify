const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;
const _ = require("lodash");

const usersData = [
  {
    id: "1",
    name: "amar",
    age: 28,
    profession: "TEACHER",
  },
  {
    id: "2",
    name: "NIkki",
    age: 28,
    profession: "dev",
  },
  {
    id: "3",
    name: "ketan",
    age: 28,
    profession: "STAFF",
  },
  {
    id: "4",
    name: "uncle",
    age: 28,
    profession: "TAILOR",
  },
];

// Crate types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    profession: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return _.find(usersData, { id: args.id });
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
