import styled from "styled-components";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container>
      <CenterContent>
        <HeadlineContainer>
          <Headline>8.000 years OF Georgian WINE Tradition</Headline>
        </HeadlineContainer>
      </CenterContent>

      <BottomLeftContent>
        <Tagline>
          Where ancient qvevri vessels meet indigenous grapes to create wines
          that tell the story of a nation&rsquo;s soul
        </Tagline>
        <CTAButton href="/wines">Explore Our Collection</CTAButton>
      </BottomLeftContent>
    </Container>
  );
};

const Container = styled.section`
  min-height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  margin: 0;
  padding: 0;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: space-between; /* Space between center and bottom */
  background: linear-gradient(
      135deg,
      rgba(107, 119, 132, 0.7) 0%,
      rgba(73, 80, 87, 0.6) 20%,
      rgba(148, 71, 16, 0.5) 100%
    ),
    url("https://i.imgur.com/vyDbf52.jpeg") center/cover no-repeat;
  position: relative;
  overflow: hidden; /* Prevents any scrollbars */

  @media (max-width: 768px) {
    min-height: 70vh;
    min-height: 100vh; /* Keep full height on mobile too */
    padding: 3rem 1rem 1.5rem 1rem;
  }
`;

const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem; /* padding for content spacing */
`;

const HeadlineContainer = styled.div`
  max-width: 600px; /* Constrain width to force line breaks */
  text-align: center;

  @media (max-width: 768px) {
    max-width: 300px; /* Even narrower on mobile */
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const BottomLeftContent = styled.div`
  align-self: flex-start;
  max-width: 800px;
  padding: 2rem; /* padding for content spacing */

  @media (max-width: 768px) {
    padding: 2rem 1rem 1.5rem 1rem;
  }
`;

const Headline = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 2px;
  text-align: center;
  font-size: 5rem;
  color: white;
  line-height: 1.4;
  margin: -7rem 0 1.5rem 0;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3.25rem;
    margin: -11rem 0 1rem 0;
  }

  @media (max-width: 480px) {
    font-size: 2.3rem;
    letter-spacing: 0.05rem;
  }
`;

const Tagline = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  line-height: 1;
  font-size: 1.175rem;
  color: #f8f9fa;
  margin: 0 0 2.5rem 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
    margin-right: 3rem;
    margin-left: -1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-right: 3rem;
    margin-left: -1rem;
  }
`;

const CTAButton = styled(Link)`
  font-family: "League Spartan", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #944710 0%, #b8560d 100%);
  color: white;
  font-size: 1rem;
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
    margin-left: -1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    margin-bottom: 6rem;
    margin-left: -1rem;
  }
`;

export default HeroSection;
