module.exports = async function (context, req) {
    
   const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = (name == "santhosh")
        ? "Hello, This is " + name + "!"
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    context.res.json({
        text: responseMessage
    });
};
