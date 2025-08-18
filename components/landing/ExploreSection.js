import styled from "styled-components";
import Link from "next/link";

const ExploreSection = () => {
  return (
    <Container>
      <Content>
        <BerlinConnection>
          <SectionTitle>From Marani to Berlin</SectionTitle>
          <Story>
            Our passion for Georgian wine led us to 8000 Vintages,
            Berlin&rsquo;s authentic Georgian wine sanctuary. Here, tradition
            meets cosmopolitan wine culture, bringing the soul of
            Georgia&rsquo;s family marani to the heart of Europe.
          </Story>
          <Story>
            Every wine in our collection is personally selected, representing
            the true spirit of Georgian hospitality and craftsmanship. From
            intimate family cellars to your glass, each bottle carries stories
            of dedication, tradition, and pure love for the craft.
          </Story>
        </BerlinConnection>

        <CallToAction>
          <CTATitle>
            Ready to Embark on a Journey Through Liquid History?
          </CTATitle>
          <CTADescription>
            Discover wines that will challenge everything you thought you knew
            about winemaking. From natural sparkling pet-nats to complex amber
            wines aged in qvevri, each bottle is an invitation to experience the
            authentic soul of Georgia.
          </CTADescription>

          <CTAButtons>
            <PrimaryCTA href="/wines">Explore Wine Collection</PrimaryCTA>
            <SecondaryCTA href="/wishlist">View My Wishlist</SecondaryCTA>
          </CTAButtons>

          <FooterNote>
            🍷 Join us in celebrating 8.000 years of winemaking heritage
          </FooterNote>
        </CallToAction>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  padding: 5rem 1rem 4rem 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: white;

  @media (max-width: 768px) {
    padding: 3rem 1rem 2.5rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const BerlinConnection = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2.5rem;

  color: #374151;
  margin: 0 0 2rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Story = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 1.25rem;
  color: #4b5563;
  margin: 0 0 1.5rem 0;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0 0 1.25rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 0 1rem 0;
  }
`;

const CallToAction = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 3rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const CTATitle = styled.h3`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2rem;
  color: #4b5563;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin: 0 0 1.25rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CTADescription = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 1.125rem;
  color: #4b5563;
  margin: 0 0 2.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 0 2rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin: 0 0 1.5rem 0;
  }
`;

const CTAButtons = styled.div`
  font-family: "League Spartan", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
`;

const PrimaryCTA = styled(Link)`
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
  box-shadow: 0 4px 12px rgba(148, 71, 16, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(148, 71, 16, 0.5);
    background: linear-gradient(135deg, #b8560d 0%, #944710 100%);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    width: 280px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    width: 240px;
  }
`;

const SecondaryCTA = styled(Link)`
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
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(148, 71, 16, 0.5);
    background: linear-gradient(135deg, #b8560d 0%, #944710 100%);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    width: 280px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    width: 240px;
  }
`;

const FooterNote = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 1rem;
  color: #4b5563;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export default ExploreSection;
