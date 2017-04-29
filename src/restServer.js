
const server = module.exports = { }
import config from 'config';
const jsonApi = require('jsonapi-server')
const async = require("async")
const fs = require('fs')
const path = require('path')
const debug = require('debug')

  jsonApi.setConfig({
    graphiql: false,
    swagger: {
      title: 'AOR JSONAPI Server with MongoDB',
      version: '0.1.1',
      description: 'This is the API description block that shows up in the swagger.json',
      contact: {
        name: 'CyberBizness Inc.',
        email: 'info@cyberbizness.ca',
        url: 'docs.cyberbizness.ca'
      },
      license: {
        name: 'MIT',
        url: 'http://opensource.org/licenses/MIT'
      }
    },
    protocol: 'http',
    hostname: config.api.host,
    port: config.api.port,
    meta: {
      description: 'Ce logiciel sert présentement dans le cadre d\'une étude.'
    }
  })

  jsonApi.authenticate((request, callback) => {
    // If a "blockMe" header is provided, block access.
    if (request.headers.blockme) return callback('Fail')

    // If a "blockMe" cookie is provided, block access.
    if (request.cookies.blockMe) return callback('Fail')

    return callback()
  })

  // Will include every ressources
  fs.readdirSync(path.join(__dirname, '/server/resources')).filter(filename => /^[a-z].*\.js$/.test(filename)).map(filename => path.join(__dirname, '/server/resources/', filename)).forEach(require)

  jsonApi.onUncaughtException((request, error) => {
    const errorDetails = error.stack.split('\n')
    console.error(JSON.stringify({
      request,
      error: errorDetails.shift(),
      stack: errorDetails
    }))
  })

  jsonApi.metrics.on('data', data => {
    debug('metrics')(data)
  })

  // If we're using the example server for the test suite,
  // wait for the tests to call .start();
  if (typeof describe === 'undefined') {
    jsonApi.start()
  }
  server.start = jsonApi.start
  server.close = jsonApi.close
  server.getExpressServer = jsonApi.getExpressServer

/*
  var app = jsonApi.getExpressServer();
  app.use(someMiddleware);
  jsonApi.start() // this line applies the json:api routing and starts the service
*/