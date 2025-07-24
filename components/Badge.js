import styled from "styled-components";
import { useState } from "react";

const Badge = ({ technology }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getIconPath = (tech) => {
    switch (tech) {
      case "Qvevri":
        return "/icons/qvevri.svg";
      case "Oak Barrel":
        return "/icons/oak-barrel.svg";
      case "Pet-Nat":
        return "/icons/pet-nat.svg";
      default:
        return "/icons/qvevri.svg";
    }
  };

  return (
    <BadgeContainer
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <IconImage src={getIconPath(technology)} alt={technology} />
      {showTooltip && <Tooltip>{technology}</Tooltip>}
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem; /* Smaller padding = less white space */
  background-color: #f9fafb;
  border: 1px solid #944710; /* Updated border to match darker color */
  border-radius: 6px;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    border-color: #7a3a0d; /* Even darker on hover */
    transform: translateY(-1px);
  }
`;

const IconImage = styled.img`
  width: 24px; /* Bigger icons! */
  height: 20px;
  filter: brightness(0) saturate(100%) invert(26%) sepia(67%) saturate(1854%)
    hue-rotate(15deg) brightness(97%) contrast(89%);
  /* This CSS filter converts any color SVG to darker color #944710 */
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 5px;
  padding: 0.375rem 0.75rem;
  background-color: #374151;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 10;

  /* Tooltip arrow */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: #374151;
  }
`;

export default Badge;
