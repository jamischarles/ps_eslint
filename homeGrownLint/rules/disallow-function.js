
module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {
                var functions = context.options;

                if (functions.indexOf(node.callee.name) > -1) {
                    context.report(node, node.callee.name + "() is NOT allowed");
                }
            }
        };

    }
};
