
module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
      return resolve([
        {id: 1, username: 'wdalmut'},
        {id: 2, username: 'pippo'},
      ]);
    });
  },
};
