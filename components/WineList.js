import styled from "styled-components";
import useSWR from "swr";
import WineCard from "./WineCard";

const WineList = () => {
  // Fetch all wines from API
  const { data: wines, error, isLoading } = useSWR("/api/wines");

  // Loading state
  if (isLoading)
    return <LoadingMessage>Loading Georgian wines...</LoadingMessage>;

  // Error state
  if (error)
    return <ErrorMessage>Failed to load wines. Please try again.</ErrorMessage>;

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
  font-size: 2.25rem;
  font-weight: 700;
  color: #374151;
  text-align: center;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const Counter = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 0;
  font-weight: 500;
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

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.125rem;
  color: #6b7280;
  padding: 4rem 2rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.125rem;
  color: #dc2626;
  padding: 4rem 2rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  margin: 2rem;
`;

export default WineList;
