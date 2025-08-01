import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    wineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wine",
      required: true,
    },
    // userId field will be added later when authentication is implemented
  },
  { timestamps: true }
);

const Wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;
