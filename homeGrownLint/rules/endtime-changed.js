
module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {
                var functions = context.options;

                if (node.callee.name === 'timeEnd') {
                    context.report({
                        node: node,
                        message: node.callee.name + "() has changed to timerEnd()",
                        fix: function(fixer) {
                            return fixer.replaceText(node.callee, "timerEnd");
                        }
                    });
                }

            }
        };

    }
};
