const Candy = require("../models/candy");

exports.addCandy = async (req, res, next) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const data = await Candy.create({
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    });
    res.status(201).json({ newCandyDetails: data });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.getCandy = async (req, res, next) => {
  try {
    const candy = await Candy.findAll();
    res.status(200).json({ allCandy: candy });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.deleteOneCandy = async (req, res, next) => {
  try {
    const cId = req.params.id;
    const quantity = req.body.quantity;
    console.log(cId);
    await Candy.update({ quantity: quantity }, { where: { id: cId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTwoCandy = async (req, res, next) => {
    try {
      const cId = req.params.id;
      const quantity = req.body.quantity;
      console.log(cId);
      await Candy.update({ quantity: quantity }, { where: { id: cId } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  };

  exports.deleteThreeCandy = async (req, res, next) => {
    try {
      const cId = req.params.id;
      const quantity = req.body.quantity;
      console.log(cId);
      await Candy.update({ quantity: quantity }, { where: { id: cId } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  };
