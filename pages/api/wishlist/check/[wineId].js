// check if specific wine is in wishlist

import dbConnect from "@/db/connect";
import Wishlist from "@/db/models/Wishlist";

export default async function handler(req, res) {
  await dbConnect();

  const { wineId } = req.query;

  if (req.method === "GET") {
    try {
      const wishlistItem = await Wishlist.findOne({ wineId });

      res.status(200).json({
        isInWishlist: !!wishlistItem, // returns true/false
      });
    } catch (error) {
      console.log("Check Wishlist Error:", error);
      res.status(500).json({ error: "Failed to check wishlist status" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
