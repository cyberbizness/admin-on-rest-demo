
/*
import fs from 'fs'

let Config = function () {
console.log('Read Config')

  let obj = {};
  fs.readFile('../../config/default.json', 'utf8', function (err, data) {
    console.log('data', data)
    if (err) throw err;
    obj = JSON.parse(data);
  });
  return obj;
}

let config = module.exports = new Config();
  */

module.exports = require(__root + "/config/default")