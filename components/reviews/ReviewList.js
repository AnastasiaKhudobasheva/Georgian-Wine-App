import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import { Loading, ErrorMessage } from "../ui/LoadingAndError";
import useSWR from "swr";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const ReviewList = ({ wineId }) => {
  const [showForm, setShowForm] = useState(false);

  const {
    data: reviews,
    isLoading,
    error,
    mutate,
  } = useSWR(wineId ? `/api/reviews?wineId=${wineId}` : null);

  const handleFormSuccess = () => {
    setShowForm(false); // hide form
    mutate(); // refresh reviews data
  };

  const handleFormCancel = () => {
    setShowForm(false); // hide form
  };

  if (error) {
    return (
      <ReviewSection>
        <ErrorMessage
          title="Reviews Not Available"
          message="Unable to load reviews for this wine. Please try again later."
        />
      </ReviewSection>
    );
  }

  if (isLoading) {
    return (
      <ReviewSection>
        <SectionTitle>Community Reviews</SectionTitle>
        <Loading message="Loading reviews..." />
      </ReviewSection>
    );
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

        {!showForm && (
          <AddReviewButton onClick={() => setShowForm(true)}>
            Add a Review
          </AddReviewButton>
        )}

        {showForm && (
          <ReviewForm
            wineId={wineId}
            onSuccess={handleFormSuccess}
            onCancel={handleFormCancel}
          />
        )}
      </ReviewSection>
    );
  }

  return (
    <ReviewSection>
      <SectionTitle>Community Reviews</SectionTitle>
      <ReviewCount>
        {reviews.length} review{reviews.length !== 1 ? "s" : ""}
      </ReviewCount>

      <ReviewContainer>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </ReviewContainer>

      {!showForm && (
        <AddReviewButton onClick={() => setShowForm(true)}>
          Add a Review
        </AddReviewButton>
      )}

      {showForm && (
        <ReviewForm
          wineId={wineId}
          onSuccess={handleFormSuccess}
          onCancel={handleFormCancel}
        />
      )}
    </ReviewSection>
  );
};

const ReviewSection = styled.section`
  max-width: 1000px;
  margin: 3rem auto 0 auto;
  padding: 2rem 1rem 0 1rem;
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

const AddReviewButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 0.75rem 2rem;
  background: #944710;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #7a3a0d;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(148, 71, 16, 0.3);
  }
`;

export default ReviewList;
