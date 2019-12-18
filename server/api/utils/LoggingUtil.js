/**
 * Logger abstracted away to its own file such that whole app uses centralized logging and
 *   logging changes just need to be made here
 *
 * TODO: define own logging format and create logger
 */

const bunyan = require('bunyan');

const reqSerializer = req => ({
  method: req.method,
  url: req.url,
});

const logger = bunyan.createLogger({
  name: 'Gemini',
  serializers: {
    req: reqSerializer,
  },
});

module.exports = logger;
