import styled from "styled-components";

const ServingTips = ({ servingTips }) => {
  const tips = [
    {
      icon: "🌡️",
      title: "Temperature",
      content: servingTips.temperature,
    },
    {
      icon: "🍷",
      title: "Decanting",
      content: servingTips.decanting,
    },
    {
      icon: "⏰",
      title: "Timing",
      content: servingTips.timing,
    },
  ];

  return (
    <ServingTipsContainer>
      <SectionTitle>Expert Serving Tips</SectionTitle>
      <TipsGrid>
        {tips.map((tip, index) => (
          <TipCard key={index}>
            <TipIcon>{tip.icon}</TipIcon>
            <TipTitle>{tip.title}</TipTitle>
            <TipContent>{tip.content}</TipContent>
          </TipCard>
        ))}
      </TipsGrid>
    </ServingTipsContainer>
  );
};

const ServingTipsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 4rem auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TipCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(44, 62, 80, 0.15);
    border-color: #c0c0c0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TipIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TipTitle = styled.h3`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TipContent = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 1.125rem;
  color: #64748b;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default ServingTips;
