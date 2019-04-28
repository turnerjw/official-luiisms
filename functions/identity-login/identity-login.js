const { prisma } = require("./generated/prisma-client");

exports.handler = async function(event) {
    const { user } = JSON.parse(event.body);
    try {
        console.log(user);

        const prismaUser = await prisma.createUser({
            name: user.user_metadata.full_name,
            email: user.email
        });

        console.log(prismaUser);

        return { statusCode: 200 };
    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }
};
