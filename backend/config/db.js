import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Database connected Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default connectDB;
