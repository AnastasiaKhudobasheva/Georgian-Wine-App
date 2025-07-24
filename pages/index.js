import Badge from "@/components/Badge";
import WineCard from "@/components/WineCard";

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Hello from Next.js</h1>

//       <Badge technology="Qvevri" />
//       <Badge technology="Oak Barrel" />
//       <Badge technology="Pet-Nat" />

//     </div>
//   );
// }
import WineList from "@/components/WineList";

export default function Home() {
  return <WineList />;
}

// export default function Home() {
//   const testWine = {
//     name: "Ori Marani Mamastan PetNat",
//     winemaker: "Ori Marani",
//     grape: ["Tsitska", "Tsolikauri", "Krakhuna"],
//     region: "Imereti",
//     price: 19.95,
//     year: 2024,
//     technology: ["Pet-Nat"],
//     imageUrl: "https://i.imgur.com/LuNCTMQ.png",
//     description:
//       "A naturally sparkling wine made with indigenous Imeretian grapes. Funky, fresh, and fizzy.",
//     slug: "ori-marani-mamastan-petnat-2024",
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px" }}>
//       <h1>Testing Wine Card:</h1>
//       <WineCard wine={testWine} />
//     </div>
//   );
// }
