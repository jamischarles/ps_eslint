module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {

                if (node.callee.name === "findGiraffe") {
                    context.report(node, "You may NOT find giraffes!!");
                }
            }
        };

    }
};
