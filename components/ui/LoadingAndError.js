import styled, { keyframes } from "styled-components";
import Link from "next/link";

const Loading = ({ message = "Loading Georgian wines..." }) => {
  return (
    <LoadingContainer>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  );
};

// Spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

const SpinnerContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #944710;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  font-weight: 500;
  margin: 0;
`;

const ErrorMessage = ({
  title = "Wine Not Found",
  message = "The wine you're looking for doesn't exist in our collection",
  actionText = "Back to Wine Collection",
  actionLink = "/",
}) => {
  return (
    <ErrorContainer>
      <ErrorIcon>🍷</ErrorIcon>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorText>{message}</ErrorText>
      <ActionButton href={actionLink}>{actionText}</ActionButton>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #374151;
  margin: 0 0 1rem 0;
  line-height: 1.2;
`;

const ErrorText = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 2rem 0;
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background-color: #944710;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(148, 71, 16, 0.2);

  &:hover {
    background-color: #7a3a0d;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(148, 71, 16, 0.3);
  }

  &:before {
    content: "←";
    font-weight: normal;
  }
`;

export { Loading, ErrorMessage };
