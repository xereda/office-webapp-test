module.exports = async (req, res, collection) => {
  try {
    const operationReturn = await collection.updateOne(
      {
        index: req.query?.index,
      },
      {
        $set: req.body,
      },
    );

    operationReturn?.modifiedCount
      ? res.status(200).json(req.body)
      : res.status(400).json({ error: operationReturn });
  } catch (error) {
    res.status(400).json({ error });
  }
};
