import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Badge from "../ui/Badge";
import WishlistButton from "./WishlistButton";

const WineCard = ({ wine }) => {
  return (
    <CardContainer>
      <WishlistButtonContainer>
        <WishlistButton wineId={wine._id} />
      </WishlistButtonContainer>
      {/* Left side - Wine Image */}
      <Link href={`/wines/${wine.slug}`} passHref>
        <ImageContainer>
          <WineImage
            src={wine.imageUrl}
            alt={wine.name}
            fill
            priority={true} //performance optimization to the first image for faster loading
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ImageContainer>
      </Link>

      {/* Right side - Wine Information */}
      <WineInfo>
        {/* Clickable Wine Name */}
        <Link href={`/wines/${wine.slug}`} passHref>
          <WineName>{wine.name}</WineName>
        </Link>

        <Winemaker>{wine.winemaker}</Winemaker>

        {/* Grape Varieties */}
        <GrapeContainer>
          <Label>Grapes:</Label>
          <GrapeList>
            {wine.grape.map((grape, index) => (
              <span key={grape}>
                {grape}
                {index < wine.grape.length - 1 && ", "}
              </span>
            ))}
          </GrapeList>
        </GrapeContainer>

        {/* Region & Year */}
        <RegionYear>
          <strong>{wine.region}</strong> • {wine.year}
        </RegionYear>

        {/* Technology Badges */}
        <TechnologyContainer>
          {wine.technology.map((tech) => (
            <Badge key={tech} technology={tech} />
          ))}
        </TechnologyContainer>

        {/* Price */}
        <Price>€{wine.price.toFixed(2)}</Price>
      </WineInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: visible;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  min-height: 240px; /* min-height: it can grow if needed */
  width: 100%;
  max-width: 480px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(148, 71, 16, 0.15);
    border-color: #944710;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 160px;
  height: 100%;
  background-color: #f9fafb;
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;

  &:hover {
    opacity: 0.95;
  }
`;

const WineImage = styled(Image)`
  object-fit: contain;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const WineInfo = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const WineName = styled.div`
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  text-decoration: none;
  margin-bottom: 0.25rem;
  cursor: pointer;
  line-height: 1.3;

  &:hover {
    color: #944710;
  }
`;

const Winemaker = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0 0 0.75rem 0;
  font-weight: 500;
`;

const GrapeContainer = styled.div`
  margin-bottom: 0.75rem;
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #944710;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const GrapeList = styled.div`
  font-size: 0.875rem;
  color: #374151;
  margin-top: 0.25rem;
  line-height: 1.4;
`;

const RegionYear = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0 0 0.75rem 0;
`;

const TechnologyContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #944710;
  text-align: right;
`;

const WishlistButtonContainer = styled.div`
  position: absolute;
  top: -1rem;
  right: -1.3rem;
  z-index: 10;
`;

export default WineCard;
