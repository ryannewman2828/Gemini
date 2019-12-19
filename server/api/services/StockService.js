/**
 * The Stock Service is responsible for periodically refreshing the technical indicators
 * and making buy / sell decisions on the stocks.
 */

const cron = require('node-cron');
const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'StockService',
});

console.log('Stock Service Active');

cron.schedule('*/1 * * * *', () => {
  console.log('running a task every minute');
});

