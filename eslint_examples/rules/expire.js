
module.exports = {

    create: function(context) {

        return {
            LineComment: function (node) {

                // EXPIRE ON 2015/12/02
                var re = /expire on (\d{4}\/\d{2}\/\d{2})/i;
                var result = node.value.match(re);

                if (!result) {
                    if (node.value.includes('EXPIRE ON')) {
                        context.report(node, "ERROR: DATE IS INVALID. Please fix");
                    }
                    return;
                }

                var expirationDate = new Date(result[1]);

                if (expirationDate.toString() === 'Invalid Date') {
                    context.report(node, "ERROR: DATE IS INVALID. Please fix");
                }


                if (Date.now() > expirationDate) {
                    context.report(node, "CODE HAS EXPIRED. Please fix the code");
                }
            }
        }
    }
};
