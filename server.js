import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js"; 

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json()); 


app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes); 


app.get("/", (req, res) => {
    res.send("Welcome to Recipe Sharing API!");
});


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`✅ Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); 
    }
};

connectDB();
