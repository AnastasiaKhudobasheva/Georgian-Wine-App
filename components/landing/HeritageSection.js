import styled from "styled-components";

const HeritageSection = () => {
  return (
    <Container>
      <Content>
        <SectionTitle>Georgian Wine Heritage</SectionTitle>
        <Story>
          In the heart of the Caucasus Mountains lies Georgia, the birthplace of
          wine. For eight centuries, Georgian families have crafted
          extraordinary wines using methods passed down through generations.
          This isn&rsquo;t just winemaking — it&rsquo;s a living, breathing
          culture where every bottle carries the whispers of ancient traditions
          and the passion of modern artisans.
        </Story>
        <Story>
          From the sun-drenched valleys of Kakheti to the misty hills of
          Imereti, each region tells its own story through wine. Here,
          winemaking is not just a profession — it&rsquo;s a sacred inheritance,
          a connection to ancestors who first buried clay vessels in the earth
          and watched as nature worked its magic.
        </Story>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  padding: 5rem 1rem;
  background: white;

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

export default HeritageSection;
