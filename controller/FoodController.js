const FoodRecommendation = require("../model/FoodRecommendation");

// פונקציה לקבלת כל הפריטים
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await FoodRecommendation.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה ליצירת פריט חדש
exports.createFood = async (req, res) => {
  try {
    const newFood = new FoodRecommendation(req.body);
    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// פונקציה לקבלת פריט לפי מזהה
exports.getFoodById = async (req, res) => {
  try {
    const foodItem = await FoodRecommendation.findById(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }
    res.json(foodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה לחיפוש פריטים לפי דירוג
exports.getFoodByRating = async (req, res) => {
  const { rating } = req.params;  // ציפייה שהדירוג יגיע בפרמטר ב-URL
  try {
    const foodItems = await FoodRecommendation.find({ rating });
    if (foodItems.length === 0) {
      return res.status(404).json({ message: "No food items found with this rating" });
    }
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה לחיפוש פריטים לפי suitableFor
exports.getFoodBySuitableFor = async (req, res) => {
  const { suitableFor } = req.params;  // ציפייה שהקטגוריה תגיע בפרמטר ב-URL
  try {
    const foodItems = await FoodRecommendation.find({ suitableFor: suitableFor });
    if (foodItems.length === 0) {
      return res.status(404).json({ message: "No food items found for this category" });
    }
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה לחיפוש פריטים לפי מרכיבים
exports.getFoodByIngredient = async (req, res) => {
  const { ingredient } = req.params;  // ציפייה שהמרכיב יגיע בפרמטר ב-URL
  try {
    const foodItems = await FoodRecommendation.find({ ingredients: ingredient });
    if (foodItems.length === 0) {
      return res.status(404).json({ message: "No food items found with this ingredient" });
    }
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
