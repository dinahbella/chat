import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";

dotenv.config({});
const app = express();
const PORT = process.env.PORT || 4000;
// middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// http://localhost:7000
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at ${PORT}`);
});
