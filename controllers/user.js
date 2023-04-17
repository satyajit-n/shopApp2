const User = require('../models/user');

exports.addUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const pnumber = req.body.pnumber;

    const data = await User.create({
      name: name,
      email: email,
      pnumber: pnumber,
    });
    res.status(201).json({ newUserDetail: data });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ allUsers: users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const uId = req.params.id;
    console.log(uId);
    await User.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

