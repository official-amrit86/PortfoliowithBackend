// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Use CORS properly
app.use(cors({ origin: "http://localhost:5173" }));

// ✅ Parse JSON body
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Stop server if DB fails
  });

// ✅ Schema & Model
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// ✅ API Route
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 Incoming request body:", req.body); // Debug

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res
      .status(201)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});
// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
