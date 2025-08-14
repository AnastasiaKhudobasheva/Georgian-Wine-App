import styled from "styled-components";
import Link from "next/link";

const SommelierBadge = ({ sommelierSlug }) => {
  return (
    <Link href={`/sommeliers-choice/${sommelierSlug}`} passHref>
      <RibbonContainer>
        <RibbonText>SOMMELIER&rsquo;S CHOICE</RibbonText>
      </RibbonContainer>
    </Link>
  );
};

const RibbonContainer = styled.div`
  position: absolute;
  top: 10px;
  left: -8px;
  z-index: 10;
  cursor: pointer;
  text-decoration: none;
`;

const RibbonText = styled.div`
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 50%, #a8a8a8 100%);
  color: #2c3e50;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.375rem 0.25rem 0.375rem 1rem;
  position: relative;
  box-shadow: 0 2px 6px rgba(192, 192, 192, 0.4);
  transition: all 0.3s ease;

  /* ribbon tail effect - darker silver */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    border-left: 8px solid #a8a8a8;
    border-bottom: 8px solid transparent;
  }

  &:hover {
    /* brighter silver*/
    background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 50%, #c0c0c0 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(192, 192, 192, 0.6);
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

export default SommelierBadge;
