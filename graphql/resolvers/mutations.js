const sql = require('../../sql');

module.exports = {
  Mutation: {
    createUser: async (root, args, {req, res}, info) => {
      let {name, job, url, photo} = args;

      const query = `INSERT INTO users(name, job, url, photo) VALUES ("${name}", "${job}", "${url}", "${photo}");`;
      await sql(query);
      const query2 = 'SELECT * FROM `users` WHERE `id`= LAST_INSERT_ID()';
      const response = await sql(query2);
      return JSON.parse(JSON.stringify(response[0]));
    },

    updateUser: async (root, args, {req, res}, info) => {
      let {id, name, job, url, photo} = args;

      var query = `UPDATE users SET `;
      if (name) query += `name="${name}", `;
      if (job) query += `job="${job}", `;
      if (url) query += `url="${url}", `;
      if (photo) query += `photo="${photo}", `;
      if (query.charAt(query.length - 2) === ',')
        query = query.substring(0, query.length - 2);
      query += `WHERE id=${id};`;

      await sql(query);
      const query2 = `SELECT * FROM users WHERE id=${id};`;
      const response = await sql(query2);
      return JSON.parse(JSON.stringify(response[0]));
    },

    deleteUser: async (root, args, {req, res}, info) => {
      let {id} = args;
      const query = `SELECT * FROM users WHERE id=${id};`;
      const response = await sql(query);
      const query2 = `DELETE FROM users WHERE id=${id};`;
      await sql(query2);
      return JSON.parse(JSON.stringify(response[0]));
    },
  },
};
