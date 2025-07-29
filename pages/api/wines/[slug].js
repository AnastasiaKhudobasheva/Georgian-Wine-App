//fetch one wine by slug

import dbConnect from "@/db/connect";
import Wine from "@/db/models/Wine";
import Review from "@/db/models/Review";

export default async function handler(req, res) {
  await dbConnect();

  const { slug } = req.query;

  if (req.method === "GET") {
    try {
      const wine = await Wine.findOne({ slug }).populate("reviews");

      if (!wine) {
        return res.status(404).json({ error: "Wine not found" });
      }
      res.status(200).json(wine);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch wine" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
