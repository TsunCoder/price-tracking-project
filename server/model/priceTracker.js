const mongoose = require("mongoose");

const price = new mongoose.Schema({
  price: {type:Number},
});

const priceTracker = new mongoose.Schema({
  id: { type: Number },
  prices:[
    price,
  ]
});
priceTracker.set("timestamps", true);

let PriceTracker = mongoose.model("PriceTracker", priceTracker);

module.exports = PriceTracker;
