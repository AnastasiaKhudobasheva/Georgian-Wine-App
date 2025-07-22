import mongoose from "mongoose";

const WineSchema = new mongoose.Schema({
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
});

export default mongoose.models.Wine || mongoose.model("Wine", WineSchema);
