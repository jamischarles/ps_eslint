module.exports = {

    create: function(context) {

        function findComments(node) {
            if (node.value.indexOf('FIXME') > -1) {
                context.report(node, "NO FIXME ALLOWED");
            }

            if (node.value.indexOf('TODO') > -1) {
                context.report(node, "NO TODO ALLOWED");
            }
        }


        return {
            BlockComment: findComments,
            LineComment: findComments
        };

    }
};
