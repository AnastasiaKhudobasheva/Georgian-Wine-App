import styled from "styled-components";

const TastingNotes = ({ tastingNotes }) => {
  return (
    <TastingNotesContainer>
      <SectionTitle>Professional Tasting Notes</SectionTitle>
      <NotesCard>
        <QuoteIcon>&ldquo;</QuoteIcon>
        <NotesText>{tastingNotes}</NotesText>
        <QuoteIcon $closing={true}>&rdquo;</QuoteIcon>
      </NotesCard>
    </TastingNotesContainer>
  );
};

const TastingNotesContainer = styled.div`
  max-width: 800px;
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

const NotesCard = styled.div`
  background: #f8f9fa;
  border-left: 4px solid #c0c0c0;
  border-radius: 12px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 4px 20px rgba(44, 62, 80, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const QuoteIcon = styled.span`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 4rem;
  color: #c0c0c0;
  position: absolute;

  ${(props) =>
    props.$closing
      ? `
    bottom: 1rem;
    right: 2rem;
  `
      : `
    top: 1rem;
    left: 2rem;
  `}

  @media (max-width: 768px) {
    font-size: 3rem;
    ${(props) =>
      props.$closing
        ? `
      bottom: 0.5rem;
      right: 1rem;
    `
        : `
      top: 0.5rem;
      left: 1rem;
    `}
  }
`;

const NotesText = styled.div`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  line-height: 1.1;
  font-size: 1.25rem;
  color: #374151;
  text-align: center;
  margin: 1rem 0;
  position: relative;
  padding: 0 1.5rem;

  p {
    margin: 0 0 1rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.1;
  }
`;

export default TastingNotes;
