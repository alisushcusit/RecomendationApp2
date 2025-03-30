const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, required: true },
    category: { type: String, required: true, enum: ["food", "fashion"] },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("Review", ReviewSchema);