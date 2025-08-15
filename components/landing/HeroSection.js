import styled from "styled-components";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container>
      <Content>
        <Headline>Discover 8.000 Years of Georgian Wine Tradition</Headline>
        <Tagline>
          Where ancient qvevri vessels meet indigenous grapes to create wines
          that tell the story of a nation&rsquo;s soul
        </Tagline>
        <CTAButton href="/wines">Explore Our Collection</CTAButton>
      </Content>
    </Container>
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

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 2;
`;

const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #374151;
  line-height: 1.1;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin: 0 0 1rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.875rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.375rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 2.5rem 0;
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #944710 0%, #b8560d 100%);
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(148, 71, 16, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(148, 71, 16, 0.4);
    background: linear-gradient(135deg, #b8560d 0%, #944710 100%);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export default HeroSection;
