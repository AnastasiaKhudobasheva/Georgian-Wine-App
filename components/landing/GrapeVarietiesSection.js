import styled from "styled-components";

const GrapeVarietiesSection = () => {
  return (
    <Container>
      <Content>
        <SectionTitle>
          UNIQUE
          <br /> grape
          <br /> VARIETIES
        </SectionTitle>
        <Story>
          Georgia is home to over 500 indigenous grape varieties found nowhere
          else on Earth. From the bold, spicy Saperavi that paints your glass
          deep purple, to the elegant amber Rkatsiteli that glows like liquid
          gold, each grape tells a unique story.
        </Story>
        <Story>
          These aren&rsquo;t just wines — they&rsquo;re liquid archaeology,
          preserving flavors that have delighted humanity since before recorded
          history. Every sip connects you to ancient vines that have witnessed
          empires rise and fall, yet continue to produce their extraordinary
          fruit generation after generation.
        </Story>

        <GrapeGrid>
          <GrapeCard>
            <GrapeEmoji>🍇</GrapeEmoji>
            <GrapeName>Saperavi</GrapeName>
            <GrapeDescription>
              The king of Georgian reds. Deep, spicy, and bold with flavors that
              dance between dark berries and mountain herbs.
            </GrapeDescription>
          </GrapeCard>

          <GrapeCard>
            <GrapeEmoji>🥂</GrapeEmoji>
            <GrapeName>Rkatsiteli</GrapeName>
            <GrapeDescription>
              Golden amber wines with honey and apricot notes. Elegant, complex,
              and utterly unique to Georgia.
            </GrapeDescription>
          </GrapeCard>

          <GrapeCard>
            <GrapeEmoji>✨</GrapeEmoji>
            <GrapeName>500+ More</GrapeName>
            <GrapeDescription>
              Kisi, Mtsvane, Khikhvi, and hundreds of other varieties waiting to
              tell their ancient stories.
            </GrapeDescription>
          </GrapeCard>
        </GrapeGrid>
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
    margin: 0 0 1.5rem 0;
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.1;
    margin-bottom: 1.25rem;

    &:last-of-type {
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }
`;

const GrapeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GrapeCard = styled.div`
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 2rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const GrapeEmoji = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`;

const GrapeName = styled.h3`
  letter-spacing: 1px;
  font-size: 1.2rem;
  color: #374151;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 0 0.75rem 0;
  }
`;

const GrapeDescription = styled.p`
  line-height: 1.1;
  font-size: 1rem;
  color: #6b7280;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default GrapeVarietiesSection;
