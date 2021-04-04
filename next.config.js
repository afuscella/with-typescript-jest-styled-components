const headers = require('./config/headers');

module.exports = {
  trailingSlash: true,
  async headers() {
    return headers;
  },
};
