//const { prisma } = require("../generated/prisma-client");

exports.handler = function(event, context) {
    const { identity, user } = context.clientContext;
    console.log(user);
    let e = JSON.parse(event.body);
    console.log(e);
    try {
        //let res = await prisma.createUser({name: user.user_metadata.full_name, email: user.user_metadata.email});
        return { app_metadata: { roles: ["admin"] } };
    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }
};
