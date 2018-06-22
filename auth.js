
module.exports = {
  verify: function(token) {
    return new Promise(function(resolve, reject) {
      if (token == 'Bearer walter') {
        return resolve({id: 1, username: "wdalmut"});
      }

      return reject("Missing user");
    });
  },
}
