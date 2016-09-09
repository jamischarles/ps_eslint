
module.exports = {

    create: function(context) {

        function findFixme(node) {
                if (node.value.includes('FIXME')) {
                    context.report(node, "Please Fix the FIXME");
                }
        }

        return {
            BlockComment: findFixme,
            LineComment: findFixme
        }
    }
};
