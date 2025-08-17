import styled from "styled-components";

const QvevriSection = () => {
  return (
    <Container>
      <Content>
        <SectionTitle>The Qvevri Magic</SectionTitle>
        <Story>
          Meet the qvevri — Georgia&rsquo;s secret weapon. These egg-shaped clay
          vessels, buried underground in family marani, create wines unlike
          anything you&rsquo;ve ever tasted. UNESCO recognized this ancient
          technique as a world heritage treasure, but for Georgians, it&rsquo;s
          simply how wine should be made.
        </Story>
        <Story>
          The clay breathes with the wine, creating textures and flavors that
          connect you directly to Georgia&rsquo;s volcanic soils. Each qvevri
          tells a story of earth and fire, of patient hands shaping clay, and of
          wines that emerge with the soul of the land itself.
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
      </Content>
    </Container>
  );
};

const Container = styled.section`
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
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
  font-size: 1.25rem;
  color: #4b5563;
  line-height: 1.7;
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
