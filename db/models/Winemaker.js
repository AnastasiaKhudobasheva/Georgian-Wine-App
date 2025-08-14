import mongoose from "mongoose";

const winemakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    tagline: {
      type: String,
      required: true,
      trim: true,
    },
    story: {
      type: String,
      required: true,
    },
    interview: [
      {
        question: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
      },
    ],
    heroImage: {
      type: String,
      required: true,
    },
    photos: [
      {
        url: {
          type: String,
          required: true,
        },
        caption: {
          type: String,
          default: "",
        },
      },
    ],
    wines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wine",
      },
    ],
  },
  { timestamps: true }
);

const Winemaker =
  mongoose.models.Winemaker || mongoose.model("Winemaker", winemakerSchema);

export default Winemaker;
