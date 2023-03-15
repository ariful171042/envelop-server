const mongooes = require("mongoose");

const chatSchema = new mongooes.Schema(
  {
    members: Array,
  },
  {
    timestamps: true,
  }
);

const chatModel = mongooes.model("Chat", chatSchema);

module.exports = chatModel;
