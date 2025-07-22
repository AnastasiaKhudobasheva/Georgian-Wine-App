//fetch all wines

import dbConnect from "@/db/connect";
import Wine from "@/db/models/Wine";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const wines = await Wine.find();
      return res.status(200).json(wines);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch wines." });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
