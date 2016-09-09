
module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {
                if (node.callee.name === 'timeEnd') {
                    var isString = typeof node.arguments[0].value === 'string';
                    if (!isString){
                        context.report(node, "first param of timeEnd() MUST be a string");
                    }
                }
            }
        };

    }
};
