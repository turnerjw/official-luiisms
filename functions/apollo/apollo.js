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
        // hello: async (parent, args, context, info) => {
        //     try {
        //         const { ism } = await context.prisma.createLuiism({
        //             ism: "misconskewed",
        //             usage: "nooo!"
        //         });
        //         console.log(ism);
        //         return ism;
        //     } catch (error) {
        //         console.log(error);
        //         return "error";
        //     }
        // }
    },
    Mutation: {
        createLuiism: async (parent, args, context) => {
            try {
                if (context.clientContext.user) {
                    return await context.prisma.createLuiism({
                        ism: args.ism,
                        usage: args.usage,
                        submittedBy: {
                            connect: {
                                email: context.clientContext.user.email
                            }
                        }
                    });
                } else {
                    return await context.prisma.createLuiism({
                        ism: args.ism,
                        usage: args.usage
                    });
                }
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    }
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
