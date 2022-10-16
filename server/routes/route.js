const productController = require("../controller/productController");
const router = require("express").Router();
const urlController = require("../controller/urlController");
const trackerController = require("../controller/trackerController");

// URL Controller
router.post("/addUrl", urlController.addUrl);
router.get("/allURL", urlController.getAllUrl);
router.get("/allProductID", urlController.getProductId);

// Product Controller
router.get("/product", productController.getProduct);
router.get("/products", productController.getAll);

router.get("/tracker", trackerController.autoUpdate);
router.get("/tracker/create", trackerController.createTracking);

module.exports = router;
