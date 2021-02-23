const RESET_MOCK = require('./mock.js');
const GET = require('./get.js');
const DELETE = require('./delete.js');
const PATCH = require('./patch.js');
const POST = require('./post.js');

const services = {
  GET,
  DELETE,
  PATCH,
  POST,
  RESET_MOCK,
};

module.exports = {
  ...services,
};
