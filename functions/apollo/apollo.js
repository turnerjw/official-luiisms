const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("./typeDefs");
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

const resolvers = {
    Query: {
        hello: (parent, args, context, info) => {
            console.log(context.clientContext);
            return "Hello World";
        }
    },
    Mutation: {
        createLuiism: (parent, args, context, info) => {
            console.log(context.clientContext);
            return "Hello World";
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    mocks,
    mockEntireSchema: false,
    context: ({ context }) => ({
        context,
        clientContext: context.clientContext,
        prisma
    })
});

exports.handler = server.createHandler();
