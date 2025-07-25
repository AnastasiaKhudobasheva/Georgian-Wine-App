// import { useRouter } from "next/router";
// import useSWR from "swr";
// import styled from "styled-components";
// import { StyledLink } from "@/components/StyledLink";
// import { StyledImage } from "@/components/StyledImage";

import { useRouter } from "next/router";
import useSWR from "swr";
import WineDetails from "@/components/wine/WineDetails";

export default function WineDetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { slug } = router.query;

  const {
    data: wine,
    isLoading,
    error,
  } = useSWR(isReady ? `/api/wines/${slug}` : null);

  if (!isReady || isLoading) return <h2>Loading...</h2>;
  if (error || !wine) return <h2>Wine not found 🍷</h2>;

  return <WineDetails wine={wine} />;
}

// const ImageContainer = styled.div`
//   position: relative;
//   height: 15rem;
//   margin-bottom: 1rem;
// `;

// const GrapeTag = styled.span`
//   padding: 0.25rem 0.5rem;
//   margin-right: 0.5rem;
//   border-radius: 5px;
//   font-size: 0.875rem;
// `;

// const TechTag = styled.span`
//   padding: 0.25rem 0.5rem;
//   margin-right: 0.5rem;
//   border-radius: 5px;
//   font-size: 0.875rem;
// `;

// const Price = styled.p`
//   font-weight: bold;
//   font-size: 1.2rem;
// `;

// export default function WineDetailsPage() {
//   const router = useRouter();
//   const { isReady } = router;
//   const { slug } = router.query;

//   const {
//     data: wine,
//     isLoading,
//     error,
//   } = useSWR(isReady ? `/api/wines/${slug}` : null);

//   if (!isReady || isLoading) return <h2>Loading...</h2>;
//   if (error || !wine) return <h2>Wine not found 🍷</h2>;

//   return (
//     <>
//       <StyledLink href="/">← Back to list</StyledLink>

//       <ImageContainer>
//         <StyledImage
//           src={wine.imageUrl}
//           alt={wine.name}
//           priority
//           fill
//           sizes="(max-width: 768px) 100vw,
//                    (max-width: 1200px) 50vw,
//                    33vw"
//         />
//       </ImageContainer>

//       <h2>{wine.name}</h2>
//       <p>
//         <strong>Winemaker:</strong> {wine.winemaker}
//       </p>
//       <p>
//         <strong>Region:</strong> {wine.region}
//       </p>
//       <p>
//         <strong>Year:</strong> {wine.year}
//       </p>

//       <div>
//         <strong>Grapes:</strong>{" "}
//         {wine.grape.map((grape) => (
//           <GrapeTag key={grape}>{grape}</GrapeTag>
//         ))}
//       </div>

//       <div>
//         <strong>Technology:</strong>{" "}
//         {wine.technology.map((technology) => (
//           <TechTag key={technology}>{technology}</TechTag>
//         ))}
//       </div>

//       <Price>{wine.price}€</Price>

//       <p>{wine.description}</p>

//       <hr style={{ margin: "2rem 0" }} />
//     </>
//   );
// }
