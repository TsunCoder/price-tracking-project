const axios = require("axios");
const { response } = require("express");
const urlController = require("../controller/urlController");
const Product = require("../model/product");

const productController = {
  getTiKiProductID: () => {},
  getProduct: async (req, res) => {
    let data = [];
    let listId = await urlController.getProductId();

    listId.forEach( (id) => {
      axios
        .get(`https://tiki.vn/api/v2/products/${id}`)
        .then((response) => {
          const product = new Product(
            ({ id, name, short_url, price } = response.data)
          );
          data.push(product);
        })
        .catch((err) => {
          console.log(err);
        });

    });

    setTimeout(async()=>{
      await Product.deleteMany({});
      await Product.insertMany(data).then((r) => {
        res.json(r);
      })
    },3000);
  },

  getAll: async (req, res) => {
    const keyword = req.query.keyword
      ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
      : {};
    const products = await Product.find({ ...keyword })
      .sort({ _id: -1 });
    res.json({ products });
  }

};
module.exports = productController;
