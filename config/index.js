const convict = require('convict');
const schema = require('./_schema');


// Define a schema
const config = convict(schema);

// Load environment dependent configuration
const env = config.get('server.env');
Object.keys(schema).forEach((key) => {
  try {
    config.loadFile(`config/${env}/${key}.json`);
  } catch (err) {
    // Ignore file does not exist errors
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
});

// Perform validation
config.validate({
  allowed: 'strict',
});


module.exports = config;
