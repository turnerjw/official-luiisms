const resolvers = {
    Query: {
        luiism: async (parent, args, context) => {
            console.log("Getting Luiism by ID");

            try {
                return await context.prisma.luiism({ id: args.id });
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        randomLuiism: async (parent, args, context) => {
            console.log("Getting Random Luiism");

            try {
                const {
                    count
                } = await context.prisma.luiismsConnection().aggregate();
                const randomIndex = Math.floor(Math.random() * count);

                return (luiism = (await context.prisma.luiisms({
                    skip: randomIndex,
                    first: 1
                }))[0]);
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },
    Mutation: {
        createLuiism: async (parent, args, context) => {
            console.log("Creating Luiism");

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
    },
    Luiism: {
        submittedBy(parent, args, context) {
            return context.prisma
                .luiism({
                    id: parent.id
                })
                .submittedBy();
        }
        // favouritedBy(root, args, context) {
        //     return context.prisma
        //         .luiism({
        //             id: root.id
        //         })
        //         .favouritedBy();
        // }
    }
};

module.exports = resolvers;
