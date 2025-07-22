import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    wineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wine",
      required: true,
    },
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true } // Automatically creates createdAt & updatedAt
);

// Avoid model overwrite error in dev
const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
