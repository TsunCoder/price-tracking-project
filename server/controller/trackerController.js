const axios = require("axios");
const { response } = require("express");
const urlController = require("../controller/urlController");
const PriceTracker = require("../model/priceTracker");
const Product = require("../model/product");
const cron = require("node-cron");

const trackerController = {
  autoUpdate: async (req, res) => {
    let listId = await urlController.getProductId();

    listId.forEach((id) => {
      axios
        .get(`https://tiki.vn/api/v2/products/${id}`)
        .then((response) => {
          const product = new Product(
            ({ id, name, short_url, price } = response.data)
          );

          cron.schedule("0 1 * * *", () => {
            console.log("Running a task every midnight");
            Product.findOneAndUpdate(
              { id: product.id },
              { $set: { price: product.price } },
              (err, data) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log(data);
                }
              }
            );
          });

          const priceTracker = PriceTracker.findById(product.id);
          if (priceTracker) {
            priceTracker.prices.push(product.price);
            priceTracker.save();
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },

  createTracking: async (req, res) => {
    let data = [];

    axios.get("http://localhost:8000/api/products").then(async (response) => {
      await PriceTracker.deleteMany({});
      response.data["products"].forEach((e) => {
        const { id, price } = e;
        const prices = [];
        prices.push(price);
        const tracking = new PriceTracker({id: id, prices: [{price: price}]});
        console.log(tracking.id);
        tracking.save();
      });
      res.json(response.data["products"]);
    });
  },
};
module.exports = trackerController;
