const express = require("express");
const router = express.Router();
const FoodController = require("../controller/FoodController");

// קבלת כל הפריטים
router.get("/", FoodController.getAllFoods);

// יצירת פריט חדש
router.post("/", FoodController.createFood);

// קבלת פריט לפי מזהה
router.get("/:id", FoodController.getFoodById);

// חיפוש פריטים לפי דירוג
router.get("/rating/:rating", FoodController.getFoodByRating);

// חיפוש פריטים לפי suitableFor
router.get("/suitableFor/:suitableFor", FoodController.getFoodBySuitableFor);

// חיפוש פריטים לפי מרכיב
router.get("/ingredient/:ingredient", FoodController.getFoodByIngredient);

module.exports = router;
