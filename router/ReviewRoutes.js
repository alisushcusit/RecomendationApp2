const express = require("express");
const router = express.Router();
const ReviewController = require("../controller/ReviewController");

// קבלת ביקורות לפי פריט
router.get("/item/:itemId", ReviewController.getReviewsByItem);

// יצירת ביקורת חדשה
router.post("/", ReviewController.createReview);

// קבלת ביקורת לפי מזהה
router.get("/:id", ReviewController.getReviewById);

// קבלת ביקורות לפי קטגוריה
router.get("/category/:category", ReviewController.getReviewsByCategory);

// קבלת ביקורות לפי דירוג
router.get("/rating/:rating", ReviewController.getReviewsByRating);

// עדכון ביקורת
router.put("/:id", ReviewController.updateReview);

// מחיקת ביקורת
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;
