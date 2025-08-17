import styled from "styled-components";
import Link from "next/link";

const WinemakerBadge = ({ winemakerSlug }) => {
  return (
    <Link href={`/winemakers/${winemakerSlug}`} passHref>
      <RibbonContainer>
        <RibbonText>
          MEET THE
          <br /> WINEMAKER
        </RibbonText>
      </RibbonContainer>
    </Link>
  );
};

const RibbonContainer = styled.div`
  position: absolute;
  top: 8px;
  left: -8px;
  z-index: 10;
  cursor: pointer;
  text-decoration: none;
`;

const RibbonText = styled.div`
  background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%);
  color: #8b4513;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.5rem 0.25rem 0.5rem 1rem; //changing the ribbon lenght
  position: relative;
  box-shadow: 0 2px 6px rgba(212, 175, 55, 0.4);
  transition: all 0.3s ease;

  /* ribbon tail effect */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    border-left: 8px solid #b8860b;
    border-bottom: 8px solid transparent;
  }

  &:hover {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #d4af37 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
    padding: 0.35rem 0.5rem 0.25rem 0.75rem;

    &::after {
      border-left-width: 6px;
      border-bottom-width: 6px;
    }
  }
`;

export default WinemakerBadge;
