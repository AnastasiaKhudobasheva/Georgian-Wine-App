import styled from "styled-components";

const HeritageSection = () => {
  return (
    <Container>
      <Content>
        <SectionTitle>
          GEORGIAN
          <br /> Wine <br /> HERITAGE
        </SectionTitle>
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
  background: #f0ece6;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  text-transform: none;
  letter-spacing: 1px;
  font-size: 3.7rem;
  color: #374151;
  margin: 0 0 5rem 0;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 3rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Story = styled.p`
  font-weight: 350;
  line-height: 1.1;
  font-size: 1rem;
  color: #4b5563;
  margin: 0 0 1.5rem 0;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.1;
    margin: 0 0 1.25rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 0 1rem 0;
  }
`;

export default HeritageSection;
