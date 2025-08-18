// GET all favorited wines

import dbConnect from "@/db/connect";
import Wishlist from "@/db/models/Wishlist";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const wishlistItems = await Wishlist.find({})
        .populate("wineId") // full wine data for this wine ID
        .sort({ createdAt: -1 }); // newest favorites first

      // extract just the wine data
      const favoriteWines = wishlistItems.map((item) => item.wineId);

      res.status(200).json(favoriteWines);
    } catch (error) {
      console.log("Get Wishlist Error:", error);
      res.status(500).json({ error: "Failed to fetch wishlist" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
