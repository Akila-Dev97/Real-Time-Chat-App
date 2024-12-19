import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js"; // Import the connectDB function
import authRoutes from "./routes/auth.route.js";

dotenv.config(); // Load environment variables

// Initialize Express app
const app = express();

// Middleware to parse JSON payloads
app.use(express.json());

// Import environment variables
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and Start the Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit the application if DB connection fails
  });

// Define API routes
app.use("/api/auth", authRoutes);
ccc