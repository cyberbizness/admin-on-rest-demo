const jsonApi = require('jsonapi-server')
const customersHandler = require('../handlers/customersHandler.js')
const timestampHandler = require('../handlers/timestampHandler.js')
const authenticationHandler = require('../handlers/authenticationHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'customers',
  description: 'Represents the core content, people love to read customers.',
  handlers: customersHandler,
  searchParams: {
    'q': jsonApi.Joi.string()
      .description('Recherche par mots-clés')
      .example('Mot clé'),
    'page[id]': jsonApi.Joi.alternatives().try(jsonApi.Joi.string(), jsonApi.Joi.number())
      .description('.')
      .example(0),
    'page[offset]': jsonApi.Joi.number()
      .description('.')
      .example(0),
    'page[limit]': jsonApi.Joi.number()
      .description('.')
      .example(0),
    'filter[id]': jsonApi.Joi.alternatives().try(jsonApi.Joi.number(), jsonApi.Joi.string())
      .description('.')
      .example(0),
    'filter[has_ordered]': jsonApi.Joi.boolean()
      .description('A déjà acheté')
      .example(true),
    'filter[first_seen_gte]': jsonApi.Joi.string()
      .description('.')
      .example('.'),
    'filter[groups]': jsonApi.Joi.alternatives().try(jsonApi.Joi.string(), jsonApi.Joi.array())
      .description('.'),
  },
  attributes: {
    id: jsonApi.Joi.number().required()
      .description('.'),
    type: jsonApi.Joi.string()
      .default('customers')
      .description('.'),
    first_name: jsonApi.Joi.string().allow(null)
      .description('.'),
    last_name: jsonApi.Joi.string().allow(null)
      .description('.'),
    email: jsonApi.Joi.string().allow(null)
      .description('.'),
    address: jsonApi.Joi.string().allow(null)
      .description('.'),
    zipcode: jsonApi.Joi.string().allow(null)
      .description('.'),
    city: jsonApi.Joi.string().allow(null)
      .description('.'),
    avatar: jsonApi.Joi.string().allow(null)
      .description('.'),
    birthday: jsonApi.Joi.date().iso().allow(null)
      .description('.'),

    first_seen: jsonApi.Joi.date().iso().allow(null)
      .description('The date on which the customer was created, YYYY-MM-DD'),
    first_seen_gte: jsonApi.Joi.date().iso().allow(null)
      .description('The date on which the customer was created, YYYY-MM-DD'),
    last_seen: jsonApi.Joi.date().iso().allow(null)
      .description('The date on which the customer was created, YYYY-MM-DD'),
    has_ordered: jsonApi.Joi.boolean().allow(null)
      .description('.'),
    latest_purchase: jsonApi.Joi.date().iso().allow(null)
      .description('.'),
    has_newsletter: jsonApi.Joi.boolean().allow(null)
      .description('.'),
    groups: jsonApi.Joi.alternatives().try(jsonApi.Joi.string(), jsonApi.Joi.array().items(
        jsonApi.Joi.string().allow(null)
      ))
      .allow(null)
      .description('.'),

    nb_commands: jsonApi.Joi.number().allow(null)
      .description('.'),
    total_spent: jsonApi.Joi.number().allow(null)
      .description('.'),

  }

})
