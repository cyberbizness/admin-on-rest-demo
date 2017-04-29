const jsonApi = require('jsonapi-server')
const cacheJsonApi = require('jsonapi-server');
const categoriesHandler = require('../handlers/categoriesHandler.js')
const timestampHandler = require('../handlers/timestampHandler.js')
const authenticationHandler = require('../handlers/authenticationHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'categories',
  description: 'Represents the core content, people love to read categories.',
  handlers: categoriesHandler,
  searchParams: {
    'q': jsonApi.Joi.string()
      .description('Recherche par mots-clés')
      .example('Mot clé'),
    'page[id]': jsonApi.Joi.alternatives().try(jsonApi.Joi.string(), jsonApi.Joi.number())
      .description('.')
      .example(0),
    'page[offset]': cacheJsonApi.Joi.number()
      .description('.')
      .example(0),
    'page[limit]': cacheJsonApi.Joi.number()
      .description('.')
      .example(0),
    'filter[id]': jsonApi.Joi.alternatives().try(jsonApi.Joi.string(), jsonApi.Joi.number())
      .description('.')
      .example('ABCDEF'),
  },
  attributes: {
    _id: cacheJsonApi.Joi
      .description('MongoDB ObjectId'),
    id: jsonApi.Joi.alternatives().try(jsonApi.Joi.string(), jsonApi.Joi.number())
      .description('.'),
    type: cacheJsonApi.Joi.string().default(0)
      .description('.')
      .default('categories'),
    name: cacheJsonApi.Joi.string()
      .description('Nom de la catégorie')
  }
})
