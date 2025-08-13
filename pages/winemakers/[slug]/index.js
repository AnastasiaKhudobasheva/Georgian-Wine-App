import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";
import WinemakerHero from "@/components/winemaker/WinemakerHero";
import WinemakerStory from "@/components/winemaker/WinemakerStory";

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
        <ErrorMessage
          title="Winemaker not found"
          message="The winemaker you are looking for does not exist."
        />
      </Container>
    );
  }

  return (
    <Container>
      <BackButton href="/">← Back to Wine Collection</BackButton>

      <WinemakerHero winemaker={winemaker} />
      <WinemakerStory story={winemaker.story} />

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
