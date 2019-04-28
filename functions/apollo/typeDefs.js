const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
    type Query {
        luiism(id: ID!): Luiism
        randomLuiism: Luiism!
        # hello: String!
        # allLuiisms: [Luiism!]!
    }

    type Mutation {
        # createUser(name: String!): User
        createLuiism(ism: String!, usage: String!): Luiism
        # favouriteLuiism(user: ID!, luiism: ID!): Luiism
    }

    type User {
        id: ID!
        name: String!
        submissions: [Luiism!]!
        favourites: [Luiism!]!
    }

    type Luiism {
        id: ID!
        ism: String!
        usage: String!
        submittedBy: User
        favouritedBy: [User!]!
    }
`;

module.exports = typeDefs;
