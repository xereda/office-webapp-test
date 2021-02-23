module.exports = async (req, res, collection) => {
  try {
    const offices = await collection.find({}).toArray();

    res.status(200).json(offices);
  } catch (error) {
    res.status(400).json({ error });
  }
};
