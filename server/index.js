const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const route = require("./routes/route");



dotenv.config();
// Connect Database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to Mongoose");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));
// Routes
app.use("/api/", route);

var port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
