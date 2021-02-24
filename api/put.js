module.exports = async (req, res, collection) => {
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
