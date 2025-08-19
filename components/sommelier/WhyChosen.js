import styled from "styled-components";

const WhyChosen = ({ whyChosen }) => {
  return (
    <WhyChosenContainer>
      <SectionTitle>Why I Chose This Wine</SectionTitle>
      <WhyChosenContent>{whyChosen}</WhyChosenContent>
    </WhyChosenContainer>
  );
};

const WhyChosenContainer = styled.div`
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

const WhyChosenContent = styled.div`
  font-weight: 350;
  line-height: 1.1;
  font-size: 1.1rem;
  color: #374151;
  text-align: justify;

  /* style paragraphs within the content */
  p {
    margin: 0 0 1.5rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* first letter (like winemaker story) */
  &::first-letter {
    font-family: "League Spartan", sans-serif;

    font-size: 4rem;
    font-weight: 700;
    float: left;
    line-height: 3rem;
    padding-right: 0.5rem;
    color: #2c3e50;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.1;
    text-align: left;

    &::first-letter {
      font-size: 3rem;
      line-height: 2.5rem;
    }
  }
`;

export default WhyChosen;
