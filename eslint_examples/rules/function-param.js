module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {

                if (node.callee.name === "timeEnd") {
                    if (typeof node.arguments[0].value !== "string") {
                        context.report(node, "timeEnd() first param MUST be a string!!");
                    }
                }
            }
        };

    }
};
