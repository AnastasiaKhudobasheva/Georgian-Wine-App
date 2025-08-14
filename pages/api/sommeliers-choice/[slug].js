import dbConnect from "@/db/connect";
import SommelierChoice from "@/db/models/SommelierChoice";

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await dbConnect();

    const sommelierChoice = await SommelierChoice.findOne({ slug }).populate(
      "wineId"
    );

    if (!sommelierChoice) {
      return res.status(404).json({ error: "Sommelier selection not found" });
    }

    res.status(200).json(sommelierChoice);
  } catch (error) {
    console.error("Sommelier API Error:", error);
    res.status(500).json({ error: "Server error" });
  }
}
