import styled from "styled-components";
import Image from "next/image";

const WinemakerHero = ({ winemaker }) => {
  return (
    <HeroContainer>
      <HeroBackground>
        <HeroImage
          src={winemaker.heroImage}
          alt={`${winemaker.name} marani`}
          fill
          priority
          sizes="100vw"
        />
        <HeroOverlay />
      </HeroBackground>

      <HeroContent>
        <WinemakerName>{winemaker.name}</WinemakerName>
        <WinemakerTagline>{winemaker.tagline}</WinemakerTagline>
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
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(139, 69, 19, 0.7) 100%
  );
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const WinemakerName = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: "Georgia", serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const WinemakerTagline = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default WinemakerHero;
