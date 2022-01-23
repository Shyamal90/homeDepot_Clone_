const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_no:{type:Number, required:true},
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    locality: { type: String, required: true },
    pin_code: { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("address", addressSchema);