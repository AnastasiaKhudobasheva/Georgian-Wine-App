import styled from "styled-components";
import { useState } from "react";
import { QvevriIcon, OakBarrelIcon, PetNatIcon } from "../icons/TechIcons";

const Badge = ({ technology, clickable = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getIcon = (tech) => {
    switch (tech) {
      case "Qvevri":
        return <QvevriIcon />;
      case "Oak Barrel":
        return <OakBarrelIcon />;
      case "Pet-Nat":
        return <PetNatIcon />;
      default:
        return null; // Default fallback: No icon for unknown or no technology
    }
  };

  // If no valid technology, don't render anything
  const icon = getIcon(technology);
  if (!icon) return null; // Exit early - don't render anything

  return (
    <BadgeContainer
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      $clickable={clickable}
    >
      <IconWrapper>{icon}</IconWrapper>
      {showTooltip && <Tooltip>{technology}</Tooltip>}
    </BadgeContainer>
  );
};

//keeping "clickable" for styling logic and not passing it to DOM:

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
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$clickable ? "#944710" : "#f3f4f6")};
    border-color: ${(props) => (props.$clickable ? "#7a3a0d" : "#944710")};
    transform: ${(props) => (props.$clickable ? "translateY(-1px)" : "none")};

    svg {
      color: ${(props) => (props.$clickable ? "white" : "#944710")};
    }
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  color: #944710; /* sets the SVG color via currentColor! */

  /* The SVG inherits this color automatically*/
  svg {
    width: 100%;
    height: 100%;
    transition: color 0.2s ease;
  }
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

  /* HIDE TOOLTIPS ON MOBILE*/
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Badge;
