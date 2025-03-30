const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: [{ type: String }],
  suitableFor: [{ type: String }],
  price: { type: Number },
  restaurant: { type: String },
  location: { type: String },
  rating: { type: Number, default: 0 },
  image:{type:String, required:true},
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
});

module.exports = mongoose.model("FoodRecommendation", FoodSchema);