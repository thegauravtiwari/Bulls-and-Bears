const config = {
  DEPLOY: process.env.BNB_ENV,
};

switch (config.DEPLOY) {

  case 'localhost':
  default:
    config.SERVER_URL = 'http://localhost:8080',
    config.SECRETS = require('./secrets.json')
    break
}

module.exports = config;