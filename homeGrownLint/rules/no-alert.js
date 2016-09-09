module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {

                if (node.callee.name === "alert") {
                    context.report(node, "Alert! You just alerted()!");
                }
            }
        };

    }
};
