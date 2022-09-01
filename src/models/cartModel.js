const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    cart: [{ type: Number, required: true }],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
