module.exports = async (req, res, collection) => {
  try {
    const operationReturn = await collection.deleteOne({
      index: req.query?.index,
    });

    operationReturn?.deletedCount
      ? res.status(204).json()
      : res.status(400).json();
  } catch (error) {
    res.status(400).json({ error });
  }
};
