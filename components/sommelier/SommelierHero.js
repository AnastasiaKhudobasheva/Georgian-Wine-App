import styled from "styled-components";
import Image from "next/image";

const SommelierHero = ({ sommelierChoice }) => {
  // get wine data from populated wineId
  const wine = sommelierChoice.wineId;

  return (
    <HeroContainer>
      <HeroBackground>
        <HeroImage
          src={sommelierChoice.heroImage}
          alt={`${wine.name} sommelier selection`}
          fill
          priority
          sizes="100vw"
        />
        <HeroOverlay />
      </HeroBackground>

      <HeroContent>
        <CenteredWineName>
          <WineName>{wine.name}</WineName>
        </CenteredWineName>

        <BottomLeftContent>
          <SommelierTagline>{sommelierChoice.tagline}</SommelierTagline>
          <SommelierName>— {sommelierChoice.sommelierName}</SommelierName>
        </BottomLeftContent>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  height: 60vh;
  min-height: 400px;
  max-height: 600px;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    height: 50vh;
    min-height: 300px;
    border-radius: 12px;
    margin-bottom: 2rem;
  }
`;

const CenteredWineName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* Takes available space to center the wine name */
`;

const BottomLeftContent = styled.div`
  align-self: flex-start; /* Align to left */
  margin-left: -1rem; /* Closer to left edge */
  margin-bottom: -1.5rem; /* Close to bottom */

  @media (max-width: 768px) {
    margin-left: 0rem;
    margin-bottom: -1rem;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Silver gradient instead of brown */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(44, 62, 80, 0.7) 100%
  );
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%; /* Take full height to distribute content */

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const WineName = styled.h1`
  letter-spacing: 1px;
  text-align: center;
  font-size: 3.5rem;
  max-width: 600px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SommelierTagline = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SommelierName = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 1rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  color: #c0c0c0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default SommelierHero;
