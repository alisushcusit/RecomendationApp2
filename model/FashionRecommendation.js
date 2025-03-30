const mongoose = require('mongoose');
const FashionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String },
    sizeOptions: [{ type: String }],
    suitableFor: [{ type: String }],
    price: { type: Number },
    rating: { type: Number, default: 0 },
    image:{type:String, required:true},
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
  });
  
  module.exports = mongoose.model("FashionRecommendation", FashionSchema);