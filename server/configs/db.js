import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}hotel-Booking`);
    console.log("✅ Database Connected");

    mongoose.connection.on("error", (err) => {
      console.error("❌ Mongoose connection error:", err);
    });
  } catch (error) {
    console.error("❌ DB Connection Failed:", error.message);
  }
};

export default connectDB;
