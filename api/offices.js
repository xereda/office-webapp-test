const services = require('./services.js');
const database = require('./database.js');
const connect = database();

const server = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const E2ERunner = req.headers['from-tests-e2e'] === 'true';

  const dataBaseURI = E2ERunner
    ? process.env.VUE_APP_MONGODB_URI_E2E
    : process.env.VUE_APP_MONGODB_URI;

  const db = await connect.connectToDatabase(dataBaseURI);
  const collection = await db.collection('offices');

  const method = req.query?.resetMock ? 'RESET_MOCK' : req.method;

  services?.[method]
    ? await services?.[method](req, res, collection)
    : res.status(400).json({ error: 'Unknown http method.' });
};

module.exports = server;
