// update single review by ID

import dbConnect from "@/db/connect";
import Review from "@/db/models/Review";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const { name, review } = req.body;

      if (!name || !review) {
        return res.status(400).json({
          error: "Name and review are required",
        });
      }

      if (review.length > 500) {
        return res.status(400).json({
          error: "Review must be 500 characters or less",
        });
      }

      const updatedReview = await Review.findByIdAndUpdate(
        id,
        {
          name: name.trim(),
          review: review.trim(),
        },
        {
          new: true, // return updated document
          runValidators: true, // run mongoose validation
        }
      );

      if (!updatedReview) {
        return res.status(404).json({ error: "Review not found" });
      }

      res.status(200).json(updatedReview);
    } catch (error) {
      console.log("Update Review Error:", error);
      res.status(500).json({ error: "Failed to update review" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
