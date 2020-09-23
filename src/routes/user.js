const router = require("express").Router();


const { getUsers, createUser,getUsersByID } = require('../controller/user')

router.get("/users", getUsers);
router.get("/users/:userId", getUsersByID);

router.post("/users",createUser)

module.exports = router;
