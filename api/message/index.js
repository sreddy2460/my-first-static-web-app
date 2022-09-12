module.exports = async function (context, req) {
    
   const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = (name == "santhosh")
        ? "Hello, This is " + name + "!"
        : "Pass correct user name  in the query string ";
    context.res.json({
        text: responseMessage
    });
};
