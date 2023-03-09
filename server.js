require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//express app
const app = express();

//Middlwares app
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

//connect to db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`connect to DB server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.meassage);
  });

//listening for requests
