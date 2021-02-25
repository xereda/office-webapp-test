const url = require('url');
const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true });

  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}

const GET = async (req, res, collection) => {
  try {
    const offices = req.query?.index
      ? await collection.findOne({ index: req.query.index })
      : await collection.find({}).toArray();

    res.status(200).json(offices);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const DELETE = async (req, res, collection) => {
  let collectionOperation;

  try {
    if (req.query?.removeAllOffices) {
      collectionOperation = await collection.deleteMany({});
    } else {
      collectionOperation = await collection.deleteOne({
        index: req.query?.index,
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }

  collectionOperation?.result?.ok
    ? res.status(200).json({})
    : res.status(404).json({});
};

const PUT = async (req, res, collection) => {
  let collectionOperation;

  try {
    collectionOperation = await collection.updateOne(
      {
        index: req.query?.index,
      },
      {
        $set: req.body,
      },
    );
  } catch (error) {
    res.status(500).json({ error });
  }

  collectionOperation?.result?.n
    ? res.status(200).json(req.body)
    : res.status(404).json({});
};

const POST = async (req, res, collection) => {
  let collectionOperation;

  try {
    collectionOperation = await collection.insertOne(req.body);
  } catch (error) {
    res.status(500).json({ error });
  }

  collectionOperation?.result?.n
    ? res.status(200).json(req.body)
    : res.status(403).json({});
};

const RESET_MOCK = async (req, res, collection) => {
  await collection.deleteMany({});
  const ISODateCurrent = new Date().toISOString();

  const offices = [...Array(req.query?.mockLength ?? 5)].map(() => ({
    index: faker.random.uuid(),
    title: faker.company.companyName(),
    address: faker.address.streetName(),
    fullName: faker.name.findName(),
    jobPosition: faker.name.jobTitle(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    createdAt: ISODateCurrent,
    updatedAt: ISODateCurrent,
  }));

  try {
    collection.insertMany(offices);
  } catch (error) {
    res.status(400).json({ error });
  }

  res.status(200).json({});
};

const services = {
  GET,
  DELETE,
  PUT,
  POST,
  RESET_MOCK,
};

const server = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const E2ERunner = req.headers['from-tests-e2e'] === 'true';

  const dataBaseURI = E2ERunner
    ? process.env.VUE_APP_MONGODB_URI_E2E
    : process.env.VUE_APP_MONGODB_URI;

  const db = await connectToDatabase(dataBaseURI);
  const collection = await db.collection('offices');

  const method = req.query?.resetMock ? 'RESET_MOCK' : req.method;

  services?.[method]
    ? await services?.[method](req, res, collection)
    : res.status(400).json({ error: 'Unknown http method.' });
};

module.exports = server;
