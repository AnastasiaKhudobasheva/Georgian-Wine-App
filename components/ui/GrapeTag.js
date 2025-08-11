import styled from "styled-components";

const GrapeTag = ({ grape, clickable = false, isActive = false, onClick }) => {
  const handleClick = () => {
    if (clickable && onClick) {
      onClick("grape", grape);
    }
  };

  return (
    <TagSpan
      onClick={handleClick}
      $clickable={clickable}
      $isActive={isActive}
      title={clickable ? `Filter by ${grape}` : undefined}
    >
      {grape}
    </TagSpan>
  );
};

const TagSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  background-color: ${(props) => (props.$isActive ? "#944710" : "#f9fafb")};
  border: 1px solid #944710;
  border-radius: 6px;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => (props.$isActive ? "white" : "#374151")};
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => {
      if (!props.$clickable) return "#f3f4f6";
      if (props.$isActive) return "#7a3a0d";
      return "#944710";
    }};
    color: ${(props) => {
      if (!props.$clickable) return "#374151";
      return "white";
    }};
    border-color: ${(props) => (props.$clickable ? "#7a3a0d" : "#944710")};
    transform: ${(props) => (props.$clickable ? "translateY(-1px)" : "none")};
  }
`;

export default GrapeTag;
