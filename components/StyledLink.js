import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #f5f1e8; /* Earthy beige */
  color: #3b2f2f; /* Warm dark brown */
  border: 1px solid #d6c8b4;
  border-radius: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e6dfd1;
    color: #2e1e1e;
    border-color: #bfae96;
  }
`;
