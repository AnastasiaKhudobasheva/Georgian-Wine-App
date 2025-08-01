import styled from "styled-components";
import useSWR from "swr";
import WineCard from "@/components/wine/WineCard";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";

const WishlistPage = () => {
  const { data: favoriteWines, error, isLoading } = useSWR("/api/wishlist");

  if (isLoading) return <Loading message="Loading your wishlist..." />;

  if (error)
    return <ErrorMessage message="Failed to load wishlist. Please try again" />;

  if (!favoriteWines || favoriteWines.length === 0) {
    return (
      <Container>
        <Headline>My Wishlist</Headline>
        <EmptyState>
          <EmptyIcon>❤️</EmptyIcon>
          <EmptyMessage>
            Your wishlist is empty. Start exploring Georgian wines to add your
            favorites!
          </EmptyMessage>
          <BackToWinesButton href="/">
            Explore Wine Collection
          </BackToWinesButton>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <Headline>My Wishlist</Headline>

      <WineGrid>
        {favoriteWines.map((wine) => (
          <WineCard key={wine._id} wine={wine} />
        ))}
      </WineGrid>

      <Counter>
        {favoriteWines.length} wine{favoriteWines.length !== 1 ? "s" : ""} in
        your wishlist
      </Counter>
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
  margin-bottom: 2.5rem;
  line-height: 1.2;
`;

const WineGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    margin-bottom: 1rem;
  }
`;

const Counter = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 0;
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 1rem;
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;
`;

const EmptyMessage = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const BackToWinesButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #944710;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #7a3a0d;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(148, 71, 16, 0.3);
  }
`;

export default WishlistPage;
