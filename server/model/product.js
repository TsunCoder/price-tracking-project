const mongoose = require("mongoose");

const product = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  price: {
    type: Number,
  },
});
product.set("timestamps", true);
let Product = mongoose.model("Product", product);

module.exports = Product;
