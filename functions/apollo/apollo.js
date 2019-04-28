const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const { prisma } = require("./generated/prisma-client");

const mocks = {
    Luiism: () => ({
        ism: "Misconskewed",
        usage: "Noooooo! I've been misconskewed!"
    }),
    User: () => ({
        name: "Juggy"
    })
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks,
    mockEntireSchema: false,
    context: ({ context }) => ({
        context,
        clientContext: context.clientContext,
        prisma
    })
});

exports.handler = server.createHandler();
