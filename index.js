const express = require("express");
const user_routes = require("./src/routes/user");
const MongoClient = require("mongoose")
const bodyParser = require('body-parser')
const app = express();

const DB = "mongodb://localhost:27017/restfulapi";
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api/", user_routes);

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/src/index.html");
});

MongoClient.connect(DB, (err, db) => {
  if(err) throw err
  console.log('DB Created!', db)
  app.listen(3002, (req, res) => {
    console.log("server is running on port 3002...");
  });
});
