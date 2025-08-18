//fetch all wines and filter them

import dbConnect from "@/db/connect";
import Wine from "@/db/models/Wine";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { region, grape, winemaker, technology, year } = req.query;

      // START WITH EMPTY FILTER (all wines if no params)
      let mongoFilter = {};

      // ADD FILTERs
      if (region) {
        const regionArray = region.split(","); // "Kakheti,Imereti" to ["Kakheti", "Imereti"] (API accepts params from URL & builds mongo query object, comma splits into array)
        mongoFilter.region = { $in: regionArray }; // MongoDB: find wines in these regions (using $in operator to match multiple values within each filter category)
      }

      if (grape) {
        const grapeArray = grape.split(",");
        mongoFilter.grape = { $in: grapeArray };
      }

      if (winemaker) {
        const winemakerArray = winemaker.split(",");
        mongoFilter.winemaker = { $in: winemakerArray };
      }

      if (technology) {
        const techArray = technology.split(",");
        mongoFilter.technology = { $in: techArray };
      }

      if (year) {
        if (year.includes(",")) {
          //if multiple years
          const yearArray = year.split(",").map((y) => parseInt(y));
          mongoFilter.year = { $in: yearArray };
        } else {
          // if single year
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
