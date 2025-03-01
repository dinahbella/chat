import mongoose from "mongoose";

const messageModel = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requires: true,
    },
    recieverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requires: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Message = mongoose.model("Message", messageModel);
