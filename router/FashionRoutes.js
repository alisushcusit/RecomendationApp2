const express = require("express");
const router = express.Router();
const FashionController = require("../controller/FashionController");

// קבלת כל הפריטים
router.get("/", FashionController.getAllFashionItems);

// יצירת פריט חדש
router.post("/", FashionController.createFashionItem);

// קבלת פריט לפי מזהה
router.get("/:id", FashionController.getFashionById);

// חיפוש פריטים לפי דירוג
router.get("/rating/:rating", FashionController.getFashionByRating);

// חיפוש פריטים לפי suitableFor
router.get("/suitableFor/:suitableFor", FashionController.getFashionBySuitableFor);

// חיפוש פריטים לפי גודל
router.get("/size/:size", FashionController.getFashionBySize);

module.exports = router;
