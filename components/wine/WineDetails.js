import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Badge from "../ui/Badge";
import GrapeTag from "../ui/GrapeTag";
import WishlistButton from "./WishlistButton";
import WinemakerBadge from "./WinemakerBadge";
import SommelierBadge from "./SommelierBadge";

const WineDetails = ({ wine }) => {
  return (
    <Container>
      <BackButton href="/">← Back to Wine Collection</BackButton>

      <ContentLayout>
        {/* winemaker Badge */}
        {wine.isFeaturedWinemaker && wine.winemakerSlug && (
          <WinemakerBadge winemakerSlug={wine.winemakerSlug} />
        )}

        {/* sommelier Badge */}
        {wine.isSommelierChoice && (
          <SommelierBadgeContainer>
            <SommelierBadge sommelierSlug={wine.slug} />
          </SommelierBadgeContainer>
        )}

        <ImageSection>
          <WineImage
            src={wine.imageUrl}
            alt={wine.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ImageSection>

        <InfoSection>
          <WineName>{wine.name}</WineName>

          <Winemaker>{wine.winemaker}</Winemaker>

          <DetailsGrid>
            <DetailItem>
              <Label>Region</Label>
              <Value>{wine.region}</Value>
            </DetailItem>

            <DetailItem>
              <Label>Vintage</Label>
              <Value>{wine.year}</Value>
            </DetailItem>
          </DetailsGrid>

          <Section>
            <Label>Grape Varieties</Label>
            <GrapeList>
              {wine.grape.map((grape) => (
                <GrapeTag key={grape} grape={grape} />
              ))}
            </GrapeList>
          </Section>

          <Section>
            <Label>Winemaking Technology</Label>
            <TechnologyContainer>
              {wine.technology.map((tech) => (
                <Badge key={tech} technology={tech} />
              ))}
            </TechnologyContainer>
          </Section>

          <PriceSection>
            <Price>€{wine.price.toFixed(2)}</Price>
            <WishlistButton wineId={wine._id} />
          </PriceSection>

          <Description>{wine.description}</Description>
        </InfoSection>
      </ContentLayout>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #f9fafb;
  color: #374151;
  border: 1px solid #944710;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-bottom: 2rem;

  &:hover {
    background-color: #944710;
    color: white;
    transform: translateX(-2px);
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative; /* for badge positioning */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
  }
`;

// sommelier badge below winemaker badge
const SommelierBadgeContainer = styled.div`
  position: absolute;
  top: 50px; /* position below the winemaker badge */
  left: -8px;
  z-index: 9; /* slightly lower than winemaker badge */
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 500px;
  background-color: #f9fafb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(148, 71, 16, 0.1);
`;

const WineImage = styled(Image)`
  object-fit: contain;
  padding: 1rem;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const WineName = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #374151;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const Winemaker = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #944710;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Value = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #374151;
`;

const GrapeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechnologyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const PriceSection = styled.div`
  padding: 1rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #944710;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #374151;
  margin: 0;
`;

export default WineDetails;
