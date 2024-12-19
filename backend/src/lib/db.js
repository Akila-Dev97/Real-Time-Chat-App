import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // Use the return value of mongoose.connect
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        // Log the connected host
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        // Log connection errors
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit the process if the database connection fails
    }
};