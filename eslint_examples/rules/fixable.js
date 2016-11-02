module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {

                if (node.callee.name === "findPoeple") {

                    context.report({
                        node: node,
                        message: "Please use findPeople() instead!",
                        fix: function(fixer) {
                            return fixer.replaceText(node.callee, "findPeople");
                        }
                    });
                }
            }
        };

    }
};
