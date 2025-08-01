// add wine to wishlist (POST) or remove wine from wishlist (DELETE)

import dbConnect from "@/db/connect";
import Wishlist from "@/db/models/Wishlist";

export default async function handler(req, res) {
  await dbConnect();

  const { wineId } = req.query;

  if (req.method === "POST") {
    try {
      // check if already in wishlist
      const existing = await Wishlist.findOne({ wineId });

      if (existing) {
        return res.status(400).json({ error: "Wine already in wishlist" });
      }

      const newWishlistItem = new Wishlist({ wineId });
      await newWishlistItem.save();

      res.status(201).json({ message: "Wine added to wishlist" });
    } catch (error) {
      console.log("Add to Wishlist Error:", error);
      res.status(500).json({ error: "Failed to add wine to wishlist" });
    }
  } else if (req.method === "DELETE") {
    try {
      const deleted = await Wishlist.findOneAndDelete({ wineId });

      if (!deleted) {
        return res.status(404).json({ error: "Wine not found in wishlist" });
      }

      res.status(200).json({ message: "Wine removed from wishlist" });
    } catch (error) {
      console.log("Remove from Wishlist Error:", error);
      res.status(500).json({ error: "Failed to remove wine from wishlist" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
