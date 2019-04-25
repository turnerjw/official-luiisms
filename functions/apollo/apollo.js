const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("./typeDefs");

const mocks = {
    Luiism: () => ({
        value: "Misconskewed",
        usage: "Noooooo! I've been misconskewed!"
    }),
    User: () => ({
        name: "Juggy"
    })
};

const server = new ApolloServer({
    typeDefs,
    mocks,
    mockEntireSchema: false,
    context: ({ context }) => ({
        context,
        clientContext: context.clientContext
    })
});

exports.handler = server.createHandler();
