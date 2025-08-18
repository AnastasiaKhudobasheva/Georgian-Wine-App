import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";
import SommelierHero from "@/components/sommelier/SommelierHero";
import WhyChosen from "@/components/sommelier/WhyChosen";
import TastingNotes from "@/components/sommelier/TastingNotes";
import PerfectPairings from "@/components/sommelier/PerfectPairings";
import ServingTips from "@/components/sommelier/ServingTips";
import Link from "next/link";

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
      <ViewAllButton href="/wines">Explore All Georgian Wines</ViewAllButton>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ViewAllButton = styled(Link)`
  font-family: "League Spartan", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background: #944710;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(148, 71, 16, 0.2);
  margin: 0 auto;
  display: flex;
  width: fit-content;

  &:hover {
    background: #7a3a0d;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(148, 71, 16, 0.3);
  }

  &:before {
    content: "←";
    margin-right: 0.5rem;
    font-weight: normal;
  }
`;
