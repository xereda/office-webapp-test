module.exports = async (req, res, collection) => {
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
