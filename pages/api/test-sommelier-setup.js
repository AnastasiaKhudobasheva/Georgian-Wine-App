import dbConnect from "@/db/connect";
import Wine from "@/db/models/Wine";
import SommelierChoice from "@/db/models/SommelierChoice";

export default async function handler(req, res) {
  // STEP 1: Security check - only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    // STEP 2: Connect to database
    console.log("🔌 Connecting to MongoDB...");
    await dbConnect();
    console.log("✅ Connected to MongoDB!");

    // STEP 3: Find our wines and update them
    console.log("🍷 Finding wines to mark as sommelier choices...");

    const wineUpdates = await Wine.updateMany(
      {
        slug: {
          $in: [
            "ori-marani-mamastan-petnat-2024",
            "baias-krakhuna-2023",
            "ethno-saperavi-2020",
          ],
        },
      },
      { $set: { isSommelierChoice: true } }
    );

    console.log(`✅ Updated ${wineUpdates.modifiedCount} wines!`);

    // STEP 3.5: Mark wines as sommelier choices
    console.log("🏷️ Marking wines as sommelier choices...");

    const wineMarkingResult = await Wine.updateMany(
      {
        slug: {
          $in: [
            "ori-marani-mamastan-petnat-2024",
            "baias-krakhuna-2023",
            "ethno-saperavi-2020",
          ],
        },
      },
      { $set: { isSommelierChoice: true } }
    );

    console.log(
      `✅ Marked ${wineMarkingResult.modifiedCount} wines as sommelier choices!`
    );

    // STEP 4: Get the wine IDs we need
    console.log("🔍 Getting wine IDs...");

    const wines = await Wine.find({
      slug: {
        $in: [
          "ori-marani-mamastan-petnat-2024",
          "baias-krakhuna-2023",
          "ethno-saperavi-2020",
        ],
      },
    });

    console.log(`✅ Found ${wines.length} wines!`);

    // STEP 5: Create mapping of slug → ID
    const wineMap = {};
    wines.forEach((wine) => {
      wineMap[wine.slug] = wine._id;
      console.log(`📝 Mapped: ${wine.slug} → ${wine._id}`);
    });

    // STEP 6: Create sommelier choice records
    console.log("🥂 Creating sommelier choice records...");

    const sommelierChoices = [
      {
        wineId: wineMap["ori-marani-mamastan-petnat-2024"],
        slug: "ori-marani-mamastan-petnat-2024",
        sommelierName: "George // 8000 Vintages",
        tagline:
          "The perfect celebration wine - Georgian bubbles at their finest!",
        whyChosen:
          "I selected this PetNat because it represents everything I love about natural Georgian winemaking. The indigenous grapes create a complexity you simply cannot find in conventional sparkling wines. After 15 years in the wine industry, this bottle always surprises our guests at 8000 Vintages.",
        tastingNotes:
          "Bright acidity with notes of green apple, citrus zest, and wild herbs. The natural bubbles are fine and persistent. There's a lovely mineral finish that speaks to the volcanic soils of Imereti.",
        pairings: [
          {
            dish: "Adjarian Khachapuri",
            description:
              "The wine's acidity cuts through the rich cheese and egg, while the bubbles cleanse the palate perfectly.",
          },
          {
            dish: "Oysters with Mignonette",
            description:
              "A surprising but brilliant pairing - the mineral notes enhance the ocean flavors beautifully.",
          },
        ],
        servingTips: {
          temperature: "8-10°C (well chilled)",
          decanting: "No decanting needed - serve directly from the bottle",
          timing: "Drink within 2 hours of opening for best bubbles",
        },
        heroImage: "/images/sommelier/ori-marani-petnat-hero.jpg",
      },
      {
        wineId: wineMap["baias-krakhuna-2023"],
        slug: "baias-krakhuna-2023",
        sommelierName: "George // 8000 Vintages",
        tagline: "Pure liquid gold - Krakhuna grape at its most expressive",
        whyChosen:
          "This Krakhuna represents the soul of Georgian amber winemaking. Baia's traditional qvevri method creates a wine of incredible depth and complexity. I chose this because it challenges preconceptions about white wine.",
        tastingNotes:
          "Golden amber color with aromas of dried apricot, honey, and toasted nuts. On the palate, expect rich texture with balanced tannins, notes of baked apple, orange peel, and a distinctive minerality.",
        pairings: [
          {
            dish: "Roasted Pork Belly",
            description:
              "The wine's tannins and acidity balance the rich fat beautifully, while the amber notes complement the caramelized flavors.",
          },
          {
            dish: "Aged Comté Cheese",
            description:
              "Both have nutty, complex flavors that enhance each other - a match made in heaven.",
          },
        ],
        servingTips: {
          temperature: "12-14°C (lightly chilled)",
          decanting: "30 minutes decanting recommended to open up the aromas",
          timing: "Can be enjoyed immediately or aged for 5-10 years",
        },
        heroImage: "/images/sommelier/baias-krakhuna-hero.jpg",
      },
      {
        wineId: wineMap["ethno-saperavi-2020"],
        slug: "ethno-saperavi-2020",
        sommelierName: "George // 8000 Vintages",
        tagline: "Georgia's noble grape showing its true character",
        whyChosen:
          "Saperavi is Georgia's most important red grape, and Ethno's 2020 vintage showcases why. This wine perfectly balances traditional qvevri techniques with modern precision. It's my go-to recommendation for guests wanting to understand Georgian red wine.",
        tastingNotes:
          "Deep ruby color with purple highlights. Intense aromas of black cherry, blackberry, and violet with hints of spice and leather. Full-bodied with firm but smooth tannins, flavors of dark fruit, cocoa, and subtle earthiness.",
        pairings: [
          {
            dish: "Mtsvadi (Georgian Shashlik)",
            description:
              "The traditional pairing - smoky grilled meat enhances the wine's bold fruit and spice characteristics.",
          },
          {
            dish: "Beef Bourguignon",
            description:
              "Rich stewed beef and the wine's structure create a harmonious, warming combination.",
          },
        ],
        servingTips: {
          temperature: "16-18°C (room temperature)",
          decanting:
            "1-2 hours decanting highly recommended for optimal flavor development",
          timing: "Peak drinking now, can be cellared for 8-12 years",
        },
        heroImage: "/images/sommelier/ethno-saperavi-hero.jpg",
      },
    ];

    // STEP 7: Save all the data
    const savedChoices = await SommelierChoice.insertMany(sommelierChoices);
    console.log(`✅ Created ${savedChoices.length} sommelier choice records!`);

    // STEP 8: Send success response
    res.status(200).json({
      success: true,
      message: "🥂 Sommelier choices created successfully!",
      data: {
        winesUpdated: wineUpdates.modifiedCount,
        choicesCreated: savedChoices.length,
        wines: wines.map((w) => ({ name: w.name, slug: w.slug })),
      },
    });
  } catch (error) {
    // STEP 9: Handle errors gracefully
    console.error("❌ Error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
