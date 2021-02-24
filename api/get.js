module.exports = async (req, res, collection) => {
  try {
    const offices = req.query?.index
      ? await collection.findOne({ index: req.query.index })
      : await collection.find({}).toArray();

    res.status(200).json(offices);
  } catch (error) {
    res.status(500).json({ error });
  }
};
