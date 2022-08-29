module.exports = async function (context, req) {
    var myVar = req.query.name
    context.res.json({
        text: $myVar;
    });
};
