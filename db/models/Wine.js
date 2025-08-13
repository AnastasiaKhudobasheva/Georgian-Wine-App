import mongoose from "mongoose";

const wineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  winemaker: { type: String, required: true },
  grape: { type: [String], required: true },
  region: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  technology: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  isFeaturedWinemaker: {
    type: Boolean,
    default: false,
  },
});

// Avoid model overwrite error in dev
const Wine = mongoose.models.Wine || mongoose.model("Wine", wineSchema);
export default Wine;
