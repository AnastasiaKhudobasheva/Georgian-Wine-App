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
});

// VIRTUAL FIELD: Connect Wine to Reviews
wineSchema.virtual("reviews", {
  ref: "Review", // Connect to Review model
  localField: "_id", // Wine's _id field
  foreignField: "wineId", // Review's wineId field
});

// Make sure virtual fields show up in API responses:
wineSchema.set("toJSON", { virtuals: true });
wineSchema.set("toObject", { virtuals: true });

// Avoid model overwrite error in dev
const Wine = mongoose.models.Wine || mongoose.model("Wine", wineSchema);
export default Wine;
