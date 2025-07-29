import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import { Loading, ErrorMessage } from "../ui/LoadingAndError";

const ReviewList = ({ reviews, isLoading = false, error }) => {
  if (error) {
    return (
      <ErrorMessage
        title="Reviews Not Available"
        message="Unable to load reviews for this wine. Please try again later."
      />
    );
  }

  if (isLoading) {
    return <Loading message="Loading reviews..." />;
  }

  if (!reviews || reviews.length === 0) {
    return (
      <ReviewSection>
        <SectionTitle>Community Reviews</SectionTitle>
        <EmptyState>
          <EmptyIcon>🍷</EmptyIcon>
          <EmptyMessage>
            No reviews yet. Be the first to share your thoughts!
          </EmptyMessage>
        </EmptyState>
      </ReviewSection>
    );
  }

  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <ReviewSection>
      <SectionTitle>Community Reviews</SectionTitle>
      <ReviewCount>
        {reviews.length} review{reviews.length !== 1 ? "s" : ""}
      </ReviewCount>

      <ReviewContainer>
        {sortedReviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </ReviewContainer>
    </ReviewSection>
  );
};

const ReviewSection = styled.section`
  max-width: 1000px;
  margin: 3rem auto 0 auto;
  padding: 2rem 1rem 0 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin: 0 0 0.5rem 0;
`;

const ReviewCount = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 2rem 0;
  font-weight: 500;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #6b7280;
  font-size: 1.125rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const EmptyMessage = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
  margin: 0 auto;
`;

export default ReviewList;
