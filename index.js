const express = require("express");
const mongoose = require("mongoose");
const productModel = require("./models/product.model");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.get("/", function (req, res) {
  res.send("welcome");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const updatedProduct = await productModel.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
