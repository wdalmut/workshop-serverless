'use strict';

const user = require('./user');
const auth = require('./auth');
const json = JSON.stringify;

module.exports.get_users = function(event, context, callback) {
  auth
    .verify(event.headers.Authorization)
    .then(user.get_all)
    .then((users) => {
      callback(null, { statusCode: 200, body: json(users)});
    })
    .catch((error) => {
      callback(null, { statusCode: 401, body: json(error)});
    });
};
