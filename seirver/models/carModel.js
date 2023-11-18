const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  model: { type: String, required: [true, "enter model"] },
  brand: {
    type: String,
    required: [true, "enter brand"],
  },
  color: {
    type: String,
    required: [true, "enter color"],
  },
  engine: {
    name: {
      type: String,
      required: [true, "enter name engine"],
    },
    capacity: {
      type: Number,
      required: [true, "enter capacity engine"],
    },
  },
  transmission: {
    type: String,
    enum: ["manual", "automatic"],
    default: "manual",
  },
  photo: {
    type: String,
    required: [true, "enter photo"],
  },
  price: {
    type: Number,
    required: [true, "enter price"],
  },
  createdAt: {
    type: Date,
  },
});
const Car = mongoose.model("Car", carSchema);
module.exports = Car;
