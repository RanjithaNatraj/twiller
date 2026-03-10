import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./modals/user.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Twitter backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

/* =============================
   MongoDB Connection
============================= */

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.log("❌ Error connecting to MongoDB:", err.message);
  });

/* =============================
   Register User
============================= */

app.post("/api/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).send("Error: " + error.message);
  }
});

/* =============================
   Get Logged In User
============================= */

app.get("/loggedinuser", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).send("Email is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).send("Error: " + error.message);
  }
});

/* =============================
   Update User
============================= */

app.patch("/updateuser/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).send("Error: " + error.message);
  }
});