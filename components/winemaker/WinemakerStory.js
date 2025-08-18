import styled from "styled-components";

const WinemakerStory = ({ story }) => {
  return (
    <StoryContainer>
      <SectionTitle>The Story</SectionTitle>
      <StoryContent>{story}</StoryContent>
    </StoryContainer>
  );
};

const StoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #8b4513;
  text-align: center;
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const StoryContent = styled.div`
  font-size: 1rem;
  line-height: 1.2;
  color: #374151;
  text-align: justify;

  /* style paragraphs within the story */
  p {
    margin: 0 0 1.5rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &::first-letter {
    font-size: 4rem;
    font-weight: 700;
    float: left;
    line-height: 3rem;
    padding-right: 0.5rem;
    color: #944710;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.2;
    text-align: left;

    &::first-letter {
      font-size: 3rem;
      line-height: 2.5rem;
    }
  }
`;

export default WinemakerStory;
