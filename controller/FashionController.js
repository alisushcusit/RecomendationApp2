const FashionRecommendation = require("../model/FashionRecommendation");

exports.getAllFashionItems = async (req, res) => {
  try {
    
    const fashionItems = await FashionRecommendation.find();
    res.json(fashionItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createFashionItem = async (req, res) => {
  try {
    const newFashionItem = new FashionRecommendation(req.body);
    await newFashionItem.save();
    res.status(201).json(newFashionItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getFashionById = async (req, res) => {
  try {
    const fashionItem = await FashionRecommendation.findById(req.params.id);
    if (!fashionItem) {
      return res.status(404).json({ message: "Fashion item not found" });
    }
    res.json(fashionItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// פונקציה לחיפוש פריטים לפי דירוג
exports.getFashionByRating = async (req, res) => {
  const { rating } = req.params;  // ציפייה שהדירוג יגיע בפרמטר ב-URL
  try {
    const fashionItems = await FashionRecommendation.find({ rating });
    if (fashionItems.length === 0) {
      return res.status(404).json({ message: "No fashion items found with this rating" });
    }
    res.json(fashionItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה לחיפוש פריטים לפי suitableFor
exports.getFashionBySuitableFor = async (req, res) => {
  const { suitableFor } = req.params;  // ציפייה שהקטגוריה תגיע בפרמטר ב-URL
  try {
    const fashionItems = await FashionRecommendation.find({ suitableFor: suitableFor });
    if (fashionItems.length === 0) {
      return res.status(404).json({ message: "No fashion items found for this category" });
    }
    res.json(fashionItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה לחיפוש פריטים לפי גודל
exports.getFashionBySize = async (req, res) => {
  const { size } = req.params;  // ציפייה שהגודל יגיע בפרמטר ב-URL
  try {
    const fashionItems = await FashionRecommendation.find({ sizeOptions: size });
    if (fashionItems.length === 0) {
      return res.status(404).json({ message: "No fashion items found for this size" });
    }
    res.json(fashionItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

