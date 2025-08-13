import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";
import WinemakerHero from "@/components/winemaker/WinemakerHero";
import WinemakerStory from "@/components/winemaker/WinemakerStory";
import PhotoGallery from "@/components/winemaker/PhotoGallery";
import InterviewSection from "@/components/winemaker/InterviewSection";
import WinemakerWines from "@/components/winemaker/WinemakerWines";

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
      <WinemakerHero winemaker={winemaker} />
      <WinemakerStory story={winemaker.story} />
      <PhotoGallery photos={winemaker.photos} />
      <InterviewSection interview={winemaker.interview} />
      <WinemakerWines wines={winemaker.wines} winemakerName={winemaker.name} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;
