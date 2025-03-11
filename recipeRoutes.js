import express from "express";
import authMiddleware from "../middleware/authMiddleware.js"; 

const router = express.Router();


router.post("/", authMiddleware, (req, res) => {
    const { title, ingredients } = req.body;

    if (!title || !ingredients) {
        return res.status(400).json({ message: "All fields are required" });
    }

    res.json({
        message: "Recipe added successfully!",
        user: req.user, 
    });
});

export default router;
