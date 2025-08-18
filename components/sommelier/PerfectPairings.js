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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const DishName = styled.h3`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PairingDescription = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 1.125rem;
  line-height: 1.1;
  color: #64748b;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default PerfectPairings;
