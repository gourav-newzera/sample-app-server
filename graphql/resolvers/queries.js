const sql = require("../../sql");

module.exports = {
    Query: {
        getUser: async (root, args, { req }, info) => {
            let { id } = args;
            const query = `SELECT * FROM users WHERE id=${id};`;
            const response = await sql(query);
            return JSON.parse(JSON.stringify(response[0]));
        },
    },
};
