module.exports = async function (context, req) {
   var name = "santhosh"
    context.res.json({
        text: name
    });
};
