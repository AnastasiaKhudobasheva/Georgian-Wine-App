//fetch all wines

import dbConnect from "@/db/connect";
import Wine from "@/db/models/Wine";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { region, grape, winemaker, technology, year } = req.query;

      // all wines if no params
      let mongoFilter = {};

      if (region) {
        mongoFilter.region = region;
      }

      if (grape) {
        const grapeArray = grape.split(",");
        mongoFilter.grape = { $in: grapeArray };
      }

      if (winemaker) {
        mongoFilter.winemaker = winemaker;
      }

      if (technology) {
        const techArray = technology.split(",");
        mongoFilter.technology = { $in: techArray };
      }

      if (year) {
        if (year.includes(",")) {
          const yearArray = year.split(",").map((y) => parseInt(y));
          mongoFilter.year = { $in: yearArray };
        } else {
          mongoFilter.year = parseInt(year);
        }
      }
      const wines = await Wine.find(mongoFilter);

      res.status(200).json(wines);
    } catch (error) {
      console.error("Wine API Error:", error);
      res.status(500).json({ error: "Failed to fetch wines" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

// export default async function handler(req, res) {
//   await dbConnect();

//   if (req.method === "GET") {
//     try {
//       const wines = await Wine.find({});
//       res.status(200).json(wines);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch wines" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
