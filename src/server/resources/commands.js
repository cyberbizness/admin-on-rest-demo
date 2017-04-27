const jsonApi = require('jsonapi-server')
const cacheJsonApi = require('jsonapi-server');
const commandsHandler = require('../handlers/commandsHandler.js')
const timestampHandler = require('../handlers/timestampHandler.js')
const authenticationHandler = require('../handlers/authenticationHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'commands',
  description: 'Represents the core content, people love to read commands.',
  handlers: commandsHandler,
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
  },
  attributes: {
    id: cacheJsonApi.Joi.number()
      .description('.'),
    type: cacheJsonApi.Joi.string().default(0)
      .description('.')
      .default('commands'),
    date: cacheJsonApi.Joi.date().iso()
      .description('.'),

    date_gte: cacheJsonApi.Joi.date().iso()
      .description('.'),
    reference: cacheJsonApi.Joi.string()
      .description('.'),
    customer_id: cacheJsonApi.Joi.number()
      .description('.'),


    basket: jsonApi.Joi.array().items(
      {product_id: cacheJsonApi.Joi.number(), quantity: cacheJsonApi.Joi.number()}
    ).allow(null)
      .description('.'),

    detail: cacheJsonApi.Joi.string()
      .description('.'),

    total_ex_taxes: cacheJsonApi.Joi.number()
      .description('.'),
    delivery_fees: cacheJsonApi.Joi.number()
      .description('.'),
    tax_rate: cacheJsonApi.Joi.number()
      .description('.'),
    taxes: cacheJsonApi.Joi.number()
      .description('.'),
    total: cacheJsonApi.Joi.number()
      .description('.'),
    status: cacheJsonApi.Joi.string()
      .description('.'),
    returned: cacheJsonApi.Joi.boolean()
      .description('.'),
  }
})
