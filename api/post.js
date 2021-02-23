module.exports = async (req, res, collection) => {
  try {
    const operationReturn = await collection.insertOne(req.body);

    operationReturn?.insertedCount
      ? res.status(200).json(req.body)
      : res.status(400).json({ error: operationReturn });
  } catch (error) {
    res.status(400).json({ error });
  }
};
