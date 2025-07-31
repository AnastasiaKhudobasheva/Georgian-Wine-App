import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import { Loading, ErrorMessage } from "../ui/LoadingAndError";
import useSWR from "swr";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import { toast } from "sonner";

const ReviewList = ({ wineId }) => {
  const [showForm, setShowForm] = useState(false);

  const {
    data: reviews,
    isLoading,
    error,
    mutate,
  } = useSWR(wineId ? `/api/reviews?wineId=${wineId}` : null);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Review submitted successfully! 🍷");
        setShowForm(false);
        mutate(); // refresh reviews
      } else {
        toast.error("Failed to submit review. Please try again");
      }
    } catch (error) {
      toast.error("Network error. Please try again");
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  if (error) {
    return (
      <ReviewSection>
        <ErrorMessage
          title="Reviews Not Available"
          message="Unable to load reviews for this wine. Please try again later"
        />
      </ReviewSection>
    );
  }

  const handleReviewUpdate = async (reviewId, formData) => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Review updated successfully! 🍷");
        mutate();
      } else {
        toast.error("Failed to update review. Please try again");
      }
    } catch (error) {
      toast.error("Network error. Please try again");
    }
  };

  const hasNoReviews = !reviews || reviews.length === 0;

  return (
    <ReviewSection>
      <SectionTitle>Community Reviews</SectionTitle>

      {isLoading ? (
        <Loading message="Loading reviews..." />
      ) : hasNoReviews ? (
        <EmptyState>
          <EmptyIcon>🍷</EmptyIcon>
          <EmptyMessage>
            No reviews yet. Be the first to share your thoughts!
          </EmptyMessage>
        </EmptyState>
      ) : (
        <>
          <ReviewCount>
            {reviews.length} review{reviews.length !== 1 ? "s" : ""}
          </ReviewCount>
          <ReviewContainer>
            {reviews.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                onReviewUpdate={handleReviewUpdate}
              />
            ))}
          </ReviewContainer>
        </>
      )}

      {showForm ? (
        <FormWrapper>
          <ReviewForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        </FormWrapper>
      ) : (
        <AddReviewButton onClick={() => setShowForm(true)}>
          Add a Review
        </AddReviewButton>
      )}
    </ReviewSection>
  );
};

const FormWrapper = styled.div`
  margin-bottom: 4rem; /* adds space below the form */
`;

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
