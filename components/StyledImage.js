import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: contain;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(60, 50, 30, 0.1);
`;
