import convict from 'convict';
import dotenv from 'dotenv';
import schema from './schema';

dotenv.config();

// Define a schema
const config = convict(schema);

// Load environment dependent configuration
const env = config.get('server.env');
Object.keys(schema).forEach((key) => {
  try {
    config.loadFile(`src/config/${env}/${key}.json`);
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

export default config;
