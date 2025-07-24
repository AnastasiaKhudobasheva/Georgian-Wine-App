// fetch all reviews

import dbConnect from "@/db/connect";
import Review from "@/db/models/Review";

export default async function handler(req, res) {
  await dbConnect();

  const { wineId } = req.query;

  if (req.method === "GET") {
    try {
      const reviews = await Review.find({ wineId }).sort({ createdAt: -1 });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
