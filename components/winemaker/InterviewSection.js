import styled from "styled-components";

const InterviewSection = ({ interview }) => {
  return (
    <InterviewContainer>
      <SectionTitle>In Their Own Words</SectionTitle>
      <InterviewSubtitle>A conversation with the winemaker</InterviewSubtitle>

      <InterviewList>
        {interview.map((qa, index) => (
          <InterviewItem key={index}>
            <Question>{qa.question}</Question>
            <Answer>{qa.answer}</Answer>
          </InterviewItem>
        ))}
      </InterviewList>
    </InterviewContainer>
  );
};

const InterviewContainer = styled.div`
  max-width: 800px;
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

const InterviewSubtitle = styled.p`
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

const InterviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const InterviewItem = styled.div`
  background: #fefbf7;
  border-left: 4px solid #944710;
  border-radius: 0 12px 12px 0;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(139, 69, 19, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #8b4513;
  margin: 0 0 1rem 0;
  font-family: "Georgia", serif;
  line-height: 1.4;

  /* add Q: prefix for visual clarity */
  &::before {
    content: "Q: ";
    font-weight: 700;
    color: #944710;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Answer = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #374151;
  margin: 0;

  /* GEORGIAN STYLE FONTS */
  font-family: "Georgia", serif;
  font-weight: 400;
  font-style: italic;

  position: relative;
  padding-left: 1.5rem;

  /* quote styling */
  &::before {
    content: '"';
    font-size: 2rem;
    color: #944710;
    position: absolute;
    left: 0;
    top: -0.25rem;
    font-family: "Georgia", serif;
    font-weight: 700;
    opacity: 0.6;
  }

  &::after {
    content: '"';
    font-size: 2rem;
    color: #944710;
    margin-left: 0.25rem;
    font-family: "Georgia", serif;
    font-weight: 700;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    padding-left: 1rem;

    &::before {
      font-size: 1.5rem;
      top: -0.125rem;
    }

    &::after {
      font-size: 1.5rem;
    }
  }
`;

export default InterviewSection;
