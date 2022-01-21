const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    locality: { type: String, required: true },
    city: { type: String, required: true },
    product_id: [
      { type: mongoose.Schema.Types.ObjectId, ref: "product", required: false },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("address", addressSchema);
