require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const messageRoute = require("./routes/messageRoute");

//express app
const app = express();

//Middlwares app
app.use(express.json());
app.use(cors());

//endpoints
app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/messages", messageRoute);

const PORT = process.env.PORT || 4000;

//connect to db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //listening for requests
    app.listen(PORT, (req, res) => {
      console.log(`connect to DB server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.meassage);
  });
