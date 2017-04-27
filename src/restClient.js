import config from '../config/default';

// FakeRestServer
//import { simpleRestClient } from 'admin-on-rest';
//const restClient = simpleRestClient('http://localhost:3000');
//export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 500));

// JSONAPI
import jsonAPIRestClient from 'aor-jsonapi-client/build/restClient';
const restClient = jsonAPIRestClient('http://' + config.Api.host + ':' + config.Api.port); // no trailing slash (?)
export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 500));

// JSON
//import { jsonServerRestClient } from 'admin-on-rest'; //NOT JSONAPI !!!
//const restClient = jsonServerRestClient('http://localhost:9001/cache'); // no trailing slash (?)
//export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 500));






