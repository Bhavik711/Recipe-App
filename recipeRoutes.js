import express from "express";
import authMiddleware from "../middleware/authMiddleware.js"; // Import middleware

const router = express.Router();

// Protected route: Add a new recipe
router.post("/", authMiddleware, (req, res) => {
    const { title, ingredients } = req.body;

    if (!title || !ingredients) {
        return res.status(400).json({ message: "All fields are required" });
    }

    res.json({
        message: "Recipe added successfully!",
        user: req.user, // User data from the token
    });
});

export default router;
