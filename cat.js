const fs = require('fs');

module.exports = function () {
  fs.readFile('./', 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
  });
};
