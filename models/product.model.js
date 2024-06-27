const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // for created at and updated at fields to have , 2 extraaa fields will create thid object
  }
);

const Product = mongoose.model("Product", ProductSchema); // here Product will create small (product) and plural (products) in database. so give it singlur collection name.

module.exports = Product;
