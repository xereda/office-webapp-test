const RESET_MOCK = require('./mock.js');
const GET = require('./get.js');
const DELETE = require('./delete.js');
const PUT = require('./put.js');
const POST = require('./post.js');

const services = {
  GET,
  DELETE,
  PUT,
  POST,
  RESET_MOCK,
};

module.exports = services;
