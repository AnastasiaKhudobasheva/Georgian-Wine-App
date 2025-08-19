// fetch all reviews + create new review

import dbConnect from "@/db/connect";
import Review from "@/db/models/Review";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const { wineId } = req.query;

    try {
      const reviews = await Review.find({ wineId }).sort({ createdAt: -1 });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  } else if (req.method === "POST") {
    const { wineId, name, review } = req.body; // fields from the form

    try {
      // Validation
      if (!wineId || !name || !review) {
        return res.status(400).json({
          error:
            "Missing required fields: wineId, name and review are required",
        });
      }

      if (review.length > 500) {
        return res.status(400).json({
          error: "Review must be 500 characters or less",
        });
      }

      const newReview = new Review({
        wineId,
        name: name.trim(),
        review: review.trim(),
      });

      const savedReview = await newReview.save();
      res.status(201).json(savedReview);
    } catch (error) {
      console.log("Create Review Error:", error);
      res.status(500).json({ error: "Failed to create review" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
