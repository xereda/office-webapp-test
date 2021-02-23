const services = require('./services.js');
const database = require('./database.js');

const connect = database();

module.exports = async (req, res) => {
  const db = await connect.connectToDatabase(process.env.MONGODB_URI);
  const collection = await db.collection('offices');

  const method = req.query?.resetMock ? 'RESET_MOCK' : req.method;

  services?.[method]
    ? await services?.[method](req, res, collection)
    : req.status(400).json({ error: 'Unknown http method.' });
};
