# AOR-jsonapi-mongodb-demo

Please update CONFIG DEFAULT.JSON + PATCH depedencies

install data from folder /data into a mongodb store (see import.sh)

________________________________________________________________________

>Bug in aor-jsonapi-client !

In : build/restClient.js

Replace : json.meta['record-count']

By : (json.meta.page)?json.meta.page['total']:0
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
