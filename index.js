const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("welcome");
});

mongoose
  .connect(
    "mongodb+srv://razakattar0221:45VSWfP9nNev2BgD@backend.xrq7kef.mongodb.net/node-api-collection?retryWrites=true&w=majority&appName=backend"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("server started running on 3000 port");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
