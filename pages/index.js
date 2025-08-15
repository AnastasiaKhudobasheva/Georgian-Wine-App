import styled from "styled-components";
import HeroSection from "@/components/landing/HeroSection";

const LandingPage = () => {
  return (
    <Container>
      <HeroSection>Hero placeholder</HeroSection>
    </Container>
    // <div style={{ padding: "2rem", textAlign: "center" }}>
    //   <h1>Georgian Wine Culture - Coming Soon! 🍷</h1>
    //   <p>Landing page under construction...</p>
    //   <a href="/wines">View Wine Collection →</a>
    // </div>
  );
};

const Container = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 4rem 1rem;
  position: relative;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 3rem 1rem;
  }
`;

export default LandingPage;
