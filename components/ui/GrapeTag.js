import styled from "styled-components";
import Link from "next/link";

const GrapeTag = ({ grape, clickable = true }) => {
  // If clickable, wrap in Link - if not, just show as span
  if (clickable) {
    return (
      <TagLink href={`/grapes/${encodeURIComponent(grape.toLowerCase())}`}>
        <TagContent>{grape}</TagContent>
      </TagLink>
    );
  }

  return <TagSpan>{grape}</TagSpan>;
};

const TagLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

const TagSpan = styled.span`
  display: inline-block;
`;

const TagContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  background-color: #f9fafb;
  border: 1px solid #944710;
  border-radius: 6px;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;

  &:hover {
    background-color: #944710;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(148, 71, 16, 0.2);
  }
`;

export default GrapeTag;
