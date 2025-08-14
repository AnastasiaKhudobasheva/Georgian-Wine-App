import mongoose from "mongoose";

const sommelierChoiceSchema = new mongoose.Schema(
  {
    wineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wine",
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    sommelierName: {
      type: String,
      required: true,
      trim: true,
      default: "George // 8000 Vintages",
    },
    tagline: {
      type: String,
      required: true,
      trim: true,
    },
    whyChosen: {
      type: String,
      required: true,
    },
    tastingNotes: {
      type: String,
      required: true,
    },
    pairings: [
      {
        dish: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    servingTips: {
      temperature: {
        type: String,
        required: true,
      },
      decanting: {
        type: String,
        required: true,
      },
      timing: {
        type: String,
        required: true,
      },
    },
    heroImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SommelierChoice =
  mongoose.models.SommelierChoice ||
  mongoose.model("SommelierChoice", sommelierChoiceSchema);

export default SommelierChoice;
