import styled from "styled-components";
import useSWR from "swr";
import WineCard from "./WineCard";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";

const WineList = () => {
  // Fetch all wines from API
  const { data: wines, error, isLoading } = useSWR("/api/wines");

  // Loading state
  if (isLoading) return <Loading message="Loading Georgian wines..." />;

  // Error state
  if (error)
    return <ErrorMessage message="Failed to load wines. Please try again." />;

  // No wines found
  if (!wines || wines.length === 0) {
    return <ErrorMessage>No wines found.</ErrorMessage>;
  }

  return (
    <Container>
      <Headline>Discover Georgian Wines</Headline>

      <WineGrid>
        {wines.map((wine) => (
          <WineCard key={wine._id} wine={wine} />
        ))}
      </WineGrid>

      <Counter>{wines.length} wines listed</Counter>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const Headline = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2.25rem;
  color: #374151;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.2;
`;

const Counter = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 0;
`;

const WineGrid = styled.div`
  /* MOBILE FIRST: Single column on phones */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1rem;

  /* TABLET: 2 columns side by side */
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  /* DESKTOP: Still 2 columns but more space */
  @media (min-width: 1024px) {
    gap: 2rem;
    margin-bottom: 1rem;
  }
`;

export default WineList;
