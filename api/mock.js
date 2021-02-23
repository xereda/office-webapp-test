const faker = require('faker');

module.exports = async (req, res, collection) => {
  await collection.deleteMany({});
  const ISODateCurrent = new Date().toISOString();

  const offices = [...Array(5)].map(() => ({
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

  res.status(204).json();
};
