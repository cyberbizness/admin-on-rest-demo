const jsonApi = require('jsonapi-server')
const cacheJsonApi = require('jsonapi-server');
const productsHandler = require('../handlers/productsHandler.js')
const timestampHandler = require('../handlers/timestampHandler.js')
const authenticationHandler = require('../handlers/authenticationHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'products',
  description: 'Represents the core content, people love to read customers.',
  handlers: productsHandler,
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
    'filter[has_ordered]': cacheJsonApi.Joi.string()
      .description('.')
      .example('.'),
    'filter[first_seen_gte]': cacheJsonApi.Joi.string()
      .description('.')
      .example('.'),
    'filter[width_gte]': cacheJsonApi.Joi.string()
      .description('.'),
    'filter[stock_lte]': cacheJsonApi.Joi.string()
      .description('.'),
  },
  attributes: {
    id: cacheJsonApi.Joi.number()
      .description('.'),
    type: cacheJsonApi.Joi.string().default(0)
      .description('.')
      .default('customers'),
    category_id: cacheJsonApi.Joi.number()
      .description('.'),
    reference: cacheJsonApi.Joi.string()
      .description('.'),
    width: cacheJsonApi.Joi.number()
      .description('.'),
    width_gte: cacheJsonApi.Joi.number()
      .description('.'),
    height: cacheJsonApi.Joi.number()
      .description('.'),
    price: cacheJsonApi.Joi.number()
      .description('.'),
    thumbnail: cacheJsonApi.Joi.string()
      .description('.'),
    image: cacheJsonApi.Joi.string()
      .description('.'),
    description: cacheJsonApi.Joi.string()
      .description('.'),
    stock: cacheJsonApi.Joi.number()
      .description('.'),

    'stock_lte': cacheJsonApi.Joi.string()
      .description('.'),
  }
})
