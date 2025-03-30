const Review = require("../model/Review");

// פונקציה לקבלת כל הביקורות עבור פריט ספציפי
exports.getReviewsByItem = async (req, res) => {
  try {
    const reviews = await Review.find({ itemId: req.params.itemId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה ליצירת ביקורת חדשה
exports.createReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    console.log(newReview);
    
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// פונקציה לקבלת ביקורת לפי מזהה
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה לקבלת ביקורות לפי קטגוריה
exports.getReviewsByCategory = async (req, res) => {
  try {
    const { category } = req.params; // מקבלים את הקטגוריה מתוך ה-params
    const reviews = await Review.find({ category }); // מחפשים את כל הביקורות בקטגוריה הזאת
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה לחיפוש ביקורות לפי דירוג
exports.getReviewsByRating = async (req, res) => {
  try {
    const { rating } = req.params; // מקבלים את הדירוג מתוך ה-params
    const reviews = await Review.find({ rating });
    if (reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found with this rating" });
    }
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// פונקציה לעדכון ביקורת קיימת
exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }  // מחזיר את הביקורת לאחר העדכון
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// פונקציה למחיקת ביקורת
exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
