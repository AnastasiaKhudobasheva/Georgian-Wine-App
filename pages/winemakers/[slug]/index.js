import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";
import { Loading } from "@/components/ui/LoadingAndError";

export default function WinemakerPage() {
  const router = useRouter();
  const { isReady } = router;
  const { slug } = router.query;

  const {
    data: winemaker,
    isLoading,
    error,
  } = useSWR(isReady ? `/api/winemakers/${slug}` : null);

  if (!isReady || isLoading) {
    return <Loading message="Loading winemaker story..." />;
  }

  if (error || !winemaker) {
    return (
      <Container>
        <BackButton href="/">← Back to Wine Collection</BackButton>
        <ErrorContainer>
          <ErrorTitle>Winemaker Not Found</ErrorTitle>
          <ErrorText>
            The winemaker you are looking for does not exist.
          </ErrorText>
        </ErrorContainer>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton href="/">← Back to Wine Collection</BackButton>

      <PageContent>
        <WinemakerName>{winemaker.name}</WinemakerName>
        <WinemakerTagline>{winemaker.tagline}</WinemakerTagline>

        <PlaceholderSection>
          <h3>🏺 Hero Section Coming Soon</h3>
          <p>Beautiful atmospheric marani photography will go here</p>
        </PlaceholderSection>

        <PlaceholderSection>
          <h3>📖 Story Section Coming Soon</h3>
          <p>Winery history and stories will go here</p>
        </PlaceholderSection>

        <PlaceholderSection>
          <h3>📸 Photo Gallery Coming Soon</h3>
          <p>Marani and vineyard photos will go here</p>
        </PlaceholderSection>

        <PlaceholderSection>
          <h3>💬 Interview Section Coming Soon</h3>
          <p>Q&A with authentic Georgian feel will go here</p>
        </PlaceholderSection>

        <PlaceholderSection>
          <h3>🍷 Featured Wines Coming Soon</h3>
          <p>Links back to their wine collection will go here</p>
        </PlaceholderSection>
      </PageContent>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #f9fafb;
  color: #374151;
  border: 1px solid #944710;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-bottom: 2rem;

  &:hover {
    background-color: #944710;
    color: white;
    transform: translateX(-2px);
  }
`;

const PageContent = styled.div`
  text-align: center;
`;

const WinemakerName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #8b4513;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WinemakerTagline = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  margin: 0 0 3rem 0;
  font-style: italic;
`;

const PlaceholderSection = styled.div`
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;

  h3 {
    color: #8b4513;
    margin: 0 0 1rem 0;
  }

  p {
    color: #6b7280;
    margin: 0;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #374151;
  margin: 0 0 1rem 0;
  line-height: 1.2;
`;

const ErrorText = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 2rem 0;
`;
