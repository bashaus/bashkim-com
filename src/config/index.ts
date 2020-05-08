import defaultsDeep from 'lodash.defaultsdeep';

import Schema from './schema';
import localSchema from './environment/local';

// Define a schema
let environment = {};

if (process.env.APP_ENV === 'local') {
  environment = localSchema;
}

const config = defaultsDeep({}, environment, Schema());

export default config;
