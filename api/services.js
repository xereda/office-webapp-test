const RESET_MOCK = require('./mock');
const GET = require('./get');
const DELETE = require('./delete');
const PUT = require('./put');
const POST = require('./post');

const services = {
  GET,
  DELETE,
  PUT,
  POST,
  RESET_MOCK,
};

module.exports = services;
