import styled from "styled-components";

const GrapeTag = ({ grape, clickable = false }) => {
  return <TagSpan>{grape}</TagSpan>;
};

const TagSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  background-color: #f9fafb;
  border: 1px solid #944710;
  border-radius: 6px;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: default;
`;

export default GrapeTag;
