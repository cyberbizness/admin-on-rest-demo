//const jsonApi = require('jsonapi-server')
//module.exports = new jsonApi.MemoryHandler()


const MongoStore = require('jsonapi-store-mongodb');
module.exports = new MongoStore({
  url: "mongodb://10.36.0.22:27017/db_test",
})
