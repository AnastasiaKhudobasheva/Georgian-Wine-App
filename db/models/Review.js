import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    wineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wine",
      required: true,
    },
    name: { type: String, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true } // Automatically creates createdAt & updatedAt
);

// Avoid model overwrite error in dev
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
