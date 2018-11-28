const api = require('../api');

module.exports = (app) => {
  app.route('/tradings')
    .get(api.tradings);
};
