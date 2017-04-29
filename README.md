# AOR-jsonapi-mongodb-demo

Please update CONFIG DEFAULT.JSON + PATCH depedencies

install data from folder /data into a mongodb store (see import.sh)

________________________________________________________________________

>Bug in aor-jsonapi-client !

In : build/restClient.js

Replace : json.meta['record-count']

By : (json.meta.page)?json.meta.page['total']:0


> Bug : Unable to get document by id

edit /node_modules/jsonapi-store-mongodb/lib/mongoHandler.js

MongoStore.prototype.find = function(request, callback) {
  var collection = this._db.collection(request.params.type);

  // if value is UUID, convert it because field will probably be numeric too.
  if (request.params.id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)){
    request.params.id = MongoStore._mongoUuid(request.params.id);
    field = '_id'
  } else {
    field = 'id'
  }

  // if value is numeric, convert it because field will probably be numeric too.
  if (!isNaN(request.params.id)){
    request.params.id  = parseInt(request.params.id);
  }

  debug("findOne", JSON.stringify({ [field]: request.params.id }));
  collection.findOne({ [field]: request.params.id }, { [field]: 0 }, function(err, result) {
    if (err || !result) {
      return callback(MongoStore._notFoundError(request.params.type, request.params.id));
    }
    return callback(null, result);
  });
};


> Bug : Some records are not show because
In JSONAPI-Server, page[limit] are processed before filters[id]

nano /node_modules/jsonapi-server/lib/pagination.js
Line 33 Add:
if (request.params.filter) page.limit=5000


> Bug : Sometimes requests are made without id value... like empty string

  jsonApi:handler:search {"type":"customers","page":{"offset":0,"limit":5000},"filter":{"has_ordered":["true"],"first_seen_gte":["2017-03-25T06:15:56.908Z"]},"sort":"-first_seen"} [null,[],0] +2ms
  jsonApi:requestCounter 3 GET /cache/customers?filter%5Bid%5D= +555ms
  jsonApi:validation:input {"type":"customers","filter":{"id":""}} +0ms
  jsonApi:errors GET http://localhost:9001/cache/customers?filter%5Bid%5D= {"status":"403","code":"EFORBIDDEN","title":"Invalid filter","detail":"Filter value for key 'id' is invalid: invalid or empty filter element"} +2ms




________________________________________________________________________

> Install babel correctly

npm install --save-dev babel-preset-es2015
________________________________________________________________________

Start the server :
npm run server

Start the frontend :
npm start


________________________________________________________________________
________________________________________________________________________

This is a demo of the [admin-on-rest](https://github.com/marmelab/admin-on-rest) library for React.js. It creates a working administration for a fake poster shop named "Affiches en gros". You can test it online at http://marmelab.com/admin-on-rest-demo.

Admin-on-rest usually requires a REST server to provide data. In this demo however, the REST server is simulated by the browser (using [FakeRest](https://github.com/marmelab/FakeRest)). You can see the source data in [public/data.js](https://github.com/marmelab/admin-on-rest-demo/tree/master/public/data.js).

To explore the source code, start with [src/index.js](https://github.com/marmelab/admin-on-rest-demo/blob/master/src/index.js).

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

Deploy the build to GitHub gh-pages.
