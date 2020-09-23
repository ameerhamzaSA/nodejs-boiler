const User = require("../model/user");

const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err)
      res.status(500).send({
        error: err,
        message: "Error Occured",
      });
    res.status(200).send({
      data: users,
      message: "Success",
    });
  });
};

const getUsersByID = (req, res) => {
  User.findOne({ _id: req.params.userId }, (err, data) => {
    if (err)
      res.status(500).send({
        error: err,
        message: "Error Occured",
      });
    res.status(200).send({
      data: data,
      message: "Success",
    });
  });
};

const createUser = (req, res) => {
  console.log(req, "/api/users");
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  });

  user
    .save()
    .then((e) => {
      res.status(200).send({
        message: "User Created",
        data: e,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error Occured!",
        data: err,
      });
    });
};

module.exports = { getUsers, createUser, getUsersByID };
