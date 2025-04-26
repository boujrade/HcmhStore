const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  product: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  wilaya: { type: String, required: true },
  address: { type: String, required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;