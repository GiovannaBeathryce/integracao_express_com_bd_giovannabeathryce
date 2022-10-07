const necessaryDataMiddlewares = async (req, res, next) => {
  const { name, price } = req.body;

  if (name === "" || name === undefined) {
    return res.status(400).json({ message: "Name is necessary" });
  } else if (price === "" || price === undefined) {
    return res.status(400).json({ message: "Price is necessary" });
  }
  next();
};

export default necessaryDataMiddlewares;
