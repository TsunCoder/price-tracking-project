const axios = require("axios");
const { response } = require("express");
const urlController = require("../controller/urlController");
const PriceTracker = require("../model/priceTracker");
const Product = require("../model/product");
const cron = require("node-cron");
const trackerController = {
  autoUpdate: async () => {
    let listId = await urlController.getProductId();

    listId.forEach((id) => {
      axios
        .get(`https://tiki.vn/api/v2/products/${id}`)
        .then(async (response) => {
          const product = new Product(
            ({ id, name, short_url, price } = response.data)
          );

          PriceTracker.find({})
            .lean()
            .exec((err, docs) => {
              console.log(docs);
            });

          Product.findOneAndUpdate(
            { id: product.id },
            { $set: { price: product.price } },
            (err, data) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Added");
                // console.log(data);
              }
            }
          );

          const priceTracking = await PriceTracker.findOne({ id: product.id });
          if (priceTracking) {
            priceTracking.prices.push({ price: product.price });
            priceTracking.save();
          } else {
          }
        });
    });
  },

  createTracking: async (req, res) => {
    axios.get("http://localhost:8000/api/products").then(async (response) => {
      await PriceTracker.deleteMany({});
      response.data["products"].forEach((e) => {
        const { id, price } = e;
        const prices = [];
        prices.push(price);
        const tracking = new PriceTracker({
          id: id,
          prices: [{ price: price }],
        });
        console.log(tracking.id);
        tracking.save();
      });
      res.json(response.data["products"]);
    });
  },
};
module.exports = trackerController;
