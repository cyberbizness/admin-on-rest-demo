const jsonApi = require('jsonapi-server')

module.exports = new jsonApi.MemoryHandler()
module.exports.delete = null
