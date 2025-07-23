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

//wineId is expected to be passed in the query string:
//Example request: /api/reviews?wineId=123456
//Later the list of reviews will be rendered below the wine details on /wines/[slug]
//via Frontend SWR call: const { data: reviews } = useSWR(`/api/reviews?wineId=${wine._id}`)
