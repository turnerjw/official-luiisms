const resolvers = {
    Query: {
        luiism: async (parent, args, context) => {
            try {
                return await context.prisma.luiism({ id: args.id });
            } catch (error) {
                console.log(error);
                return error;
            }
        }
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

module.exports = resolvers;
