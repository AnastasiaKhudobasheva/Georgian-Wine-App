import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";
import SommelierHero from "@/components/sommelier/SommelierHero";
import WhyChosen from "@/components/sommelier/WhyChosen";
import TastingNotes from "@/components/sommelier/TastingNotes";
import PerfectPairings from "@/components/sommelier/PerfectPairings";
import ServingTips from "@/components/sommelier/ServingTips";

export default function SommelierChoicePage() {
  const router = useRouter();
  const { isReady } = router;
  const { slug } = router.query;

  const {
    data: sommelierChoice,
    isLoading,
    error,
  } = useSWR(isReady ? `/api/sommeliers-choice/${slug}` : null);

  if (!isReady || isLoading) {
    return <Loading message="Loading sommelier expertise..." />;
  }

  if (error || !sommelierChoice) {
    return (
      <Container>
        <ErrorMessage
          title="Sommelier selection not found"
          message="The sommelier's choice you are looking for does not exist."
        />
      </Container>
    );
  }

  return (
    <Container>
      <SommelierHero sommelierChoice={sommelierChoice} />
      <WhyChosen whyChosen={sommelierChoice.whyChosen} />
      <TastingNotes tastingNotes={sommelierChoice.tastingNotes} />
      <PerfectPairings pairings={sommelierChoice.pairings} />
      <ServingTips servingTips={sommelierChoice.servingTips} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;
