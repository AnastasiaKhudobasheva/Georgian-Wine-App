import dbConnect from "@/db/connect";
import Winemaker from "@/db/models/Winemaker";

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await dbConnect();

    const winemaker = await Winemaker.findOne({ slug }).populate("wines");
    // getting info for ALL wines from this winemaker (array of objects in our model)

    if (!winemaker) {
      return res.status(404).json({ error: "Winemaker not found" });
    }

    res.status(200).json(winemaker);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Server error" });
  }
}
