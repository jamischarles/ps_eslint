module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {

                if (context.options.indexOf(node.callee.name) > -1) {
                    context.report(node, node.callee.name + " () is NOT allowed.");
                }
            }
        };

    }
};
