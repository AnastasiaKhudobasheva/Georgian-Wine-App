import styled from "styled-components";
import Link from "next/link";
import WineCard from "../wine/WineCard";

const WinemakerWines = ({ wines, winemakerName }) => {
  if (!wines || wines.length === 0) {
    return (
      <WinesContainer>
        <SectionTitle>Taste Their Wines</SectionTitle>
        <EmptyState>
          <EmptyText>No wines available from this winemaker yet.</EmptyText>
          <BackToCollectionButton href="/">
            Explore All Georgian Wines
          </BackToCollectionButton>
        </EmptyState>
      </WinesContainer>
    );
  }

  return (
    <WinesContainer>
      <SectionTitle>Taste Their Wines</SectionTitle>
      <SectionSubtitle>
        Discover the authentic Georgian wines from {winemakerName}
      </SectionSubtitle>

      <WinesGrid>
        {wines.map((wine) => (
          <WineCard key={wine._id} wine={wine} />
        ))}
      </WinesGrid>

      <ViewAllButton href="/">View All Georgian Wines</ViewAllButton>
    </WinesContainer>
  );
};

const WinesContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 4rem auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #8b4513;
  text-align: center;
  margin: 0 0 0.5rem 0;
  font-family: "Georgia", serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  margin: 0 0 3rem 0;
  font-style: italic;
  font-family: "Georgia", serif;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const WinesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background: #944710;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(148, 71, 16, 0.2);
  margin: 0 auto;
  display: flex;
  width: fit-content;

  &:hover {
    background: #7a3a0d;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(148, 71, 16, 0.3);
  }

  &:before {
    content: "←";
    margin-right: 0.5rem;
    font-weight: normal;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  background: #fefbf7;
  border-radius: 12px;
  border: 2px dashed #d4af37;
`;

const EmptyText = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  margin: 0 0 2rem 0;
  font-style: italic;
`;

const BackToCollectionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background: #944710;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #7a3a0d;
    transform: translateY(-1px);
  }
`;

export default WinemakerWines;
