import styled from "styled-components";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const ReviewCard = ({ review, onReviewUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // handle edit form submission (pass data up)
  const handleEditSubmit = async (formData) => {
    await onReviewUpdate(review._id, formData);
    setIsEditing(false); // switch back to display mode
  };

  const handleEditCancel = () => {
    setIsEditing(false); // switch back to display mode
  };

  // if editing, show form instead of review display
  if (isEditing) {
    return (
      <ReviewForm
        initialData={{ name: review.name, review: review.review }}
        submitText="Save Changes"
        onSubmit={handleEditSubmit}
        onCancel={handleEditCancel}
      />
    );
  }

  return (
    <ReviewContainer>
      <ReviewHeader>
        <ReviewerName>{review.name}</ReviewerName>
        <ReviewActions>
          <ReviewDate>{formatDate(review.createdAt)}</ReviewDate>
          <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
        </ReviewActions>
      </ReviewHeader>

      <ReviewText>{review.review}</ReviewText>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    border-color: #944710;
    box-shadow: 0 2px 8px rgba(148, 71, 16, 0.1);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

const ReviewerName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #944710;
  margin: 0;
`;

const ReviewDate = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 400;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  margin: 0;
`;

const ReviewActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const EditButton = styled.button`
  background: none;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #944710;
    color: #944710;
    background-color: #f9fafb;
  }
`;

export default ReviewCard;
