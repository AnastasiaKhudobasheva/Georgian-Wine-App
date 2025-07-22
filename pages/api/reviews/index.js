// fetch all reviews

import dbConnect from "@/db/connect";
import Review from "@/db/models/Review";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const reviews = await Review.find();
      return res.status(200).json(reviews);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch reviews." });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
