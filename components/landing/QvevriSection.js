import styled from "styled-components";
import Image from "next/image";

const QvevriSection = () => {
  return (
    <Container>
      <ContentWrapper>
        <ImageContainer>
          <QvevriImage
            src="https://i.imgur.com/PDxQgUo.jpeg"
            alt="Traditional Georgian qvevri wine"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ImageContainer>

        <TextContent>
          <HeaderContainer>
            <SectionTitle>the QVEVRI MAGIC</SectionTitle>
          </HeaderContainer>

          <BottomContent>
            <Story>
              Meet the qvevri — Georgia&rsquo;s secret weapon. These egg-shaped
              clay vessels, buried underground in family marani, create wines
              unlike anything you&rsquo;ve ever tasted. UNESCO recognized this
              ancient technique as a world heritage treasure, but for Georgians,
              it&rsquo;s simply how wine should be made.
            </Story>
            <Story>
              The clay breathes with the wine, creating textures and flavors
              that connect you directly to Georgia&rsquo;s volcanic soils. Each
              qvevri tells a story of earth and fire, of patient hands shaping
              clay, and of wines that emerge with the soul of the land itself.
            </Story>
            <UNESCOBadge>
              <BadgeIcon>🏛️</BadgeIcon>
              <BadgeText>
                UNESCO World Heritage
                <br />
                <BadgeSubtext>
                  Intangible Cultural Heritage of Humanity
                </BadgeSubtext>
              </BadgeText>
            </UNESCOBadge>
          </BottomContent>
        </TextContent>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 0; /* no padding for full-width layout */
  /* background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); */

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: none; /* no max-width constraint */
  margin: 0;
  display: grid;
  grid-template-columns: 50vw 50vw; /* Each takes exactly half viewport */
  height: 850px; /* Set fixed height for desktop */
  /* gap: 4rem;
  align-items: center; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 1200px;
    margin: 0 auto;
    height: auto;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border-radius: 12px; */
  /* overflow: hidden; */
  /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); */

  @media (max-width: 768px) {
    height: 550px;
    order: -1; /* image above text on mobile */
    width: 100vw; /* Full viewport width */
    margin-left: -1rem; /* Offset container padding */
    margin-right: -1rem; /* Offset container padding */
  }
`;

const QvevriImage = styled(Image)`
  style= {
     {
       {
        objectfit: "contain";
      }
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; /* Takes available space to center the header */
`;

const BottomContent = styled.div`
  margin-top: auto; /* pushes content to the absolute bottom */
`;

const TextContent = styled.div`
  text-align: left;
  padding: 5rem 3rem 0 3rem; /* Add padding inside text area */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; Distributes space between elements */
  height: 100%;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0; /* Remove padding on mobile */
    justify-content: flex-start; /* Normal stacking on mobile */
  }
`;

const SectionTitle = styled.h2`
  font-size: 4.4rem;
  color: #374151;
  margin: 0 0 2rem 0;
  line-height: 1.5;
  text-align: center;
  text-transform: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Story = styled.p`
  line-height: 1.1;
  font-size: 1rem;
  font-weight: 350;
  color: #4b5563;
  margin: 0 0 1.5rem 0;
  text-align: left;

  &:last-of-type {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0 0 1.25rem 0;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 0 1rem 0;

    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }
`;

const UNESCOBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const BadgeIcon = styled.div`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const BadgeText = styled.div`
  color: #374151;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const BadgeSubtext = styled.span`
  font-weight: 400;
  color: #6b7280;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export default QvevriSection;
