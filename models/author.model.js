const mongoose = require("mongoose");

const AuthorScheme = new mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Author", AuthorScheme);
