import styled from "styled-components";

const PerfectPairings = ({ pairings }) => {
  return (
    <PairingsContainer>
      <SectionTitle>Perfect Pairings</SectionTitle>
      <PairingsGrid>
        {pairings.map((pairing, index) => (
          <PairingCard key={index}>
            <DishName>{pairing.dish}</DishName>
            <PairingDescription>{pairing.description}</PairingDescription>
          </PairingCard>
        ))}
      </PairingsGrid>
    </PairingsContainer>
  );
};

const PairingsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 4rem auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin: 0 0 2rem 0;
  font-family: "Georgia", serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const PairingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PairingCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(44, 62, 80, 0.1);
  border: 2px solid #f1f5f9;
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

const DishName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-family: "Georgia", serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PairingDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
  text-align: center;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default PerfectPairings;
