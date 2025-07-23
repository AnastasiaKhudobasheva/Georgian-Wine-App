//fetch all wines

import dbConnect from "@/db/connect";
import Wine from "@/db/models/Wine";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const wines = await Wine.find({});
      res.status(200).json(wines);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch wines" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
