const jsonApi = require('jsonapi-server')
const authenticationHandler = module.exports = new jsonApi.ChainHandler()

authenticationHandler.beforeSearch = (request, callback) => {
  console.log('authenticationHandler: Before Search 1')
  return callback(null, request)
}

authenticationHandler.afterSearch = (request, results, pagination, callback) => {
  console.log('authenticationHandler: After Search 1')
  return callback(null, results, pagination)
}

authenticationHandler.beforeInitialise = resourceConfig => {
  console.log('authenticationHandler: Before Initialise 1', resourceConfig.resource)
}
