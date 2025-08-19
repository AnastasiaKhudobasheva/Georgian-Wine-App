import styled from "styled-components";
import HeroSection from "@/components/landing/HeroSection";
import HeritageSection from "@/components/landing/HeritageSection";
import QvevriSection from "@/components/landing/QvevriSection";
import GrapeVarietiesSection from "@/components/landing/GrapeVarietiesSection";
import ExploreSection from "@/components/landing/ExploreSection";

const LandingPage = () => {
  return (
    <PageContainer>
      <HeroSection />
      <HeritageSection />
      <QvevriSection />
      <GrapeVarietiesSection />
      <ExploreSection />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f0ece6;
`;

export default LandingPage;
