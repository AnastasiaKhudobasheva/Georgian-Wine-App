import styled from "styled-components";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const ReviewCard = ({ review, onReviewUpdate, onReviewDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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

  // handle delete confirmation
  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    await onReviewDelete(review._id);
    setIsDeleting(false);
    setShowDeleteConfirm(false); // hide confirmation after deletion
  };

  // if editing, show form instead of review display
  if (isEditing) {
    return (
      <ReviewForm
        initialData={{ name: review.name, review: review.review }}
        isEditMode={true}
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
          <DeleteButton onClick={() => setShowDeleteConfirm(true)}>
            Delete
          </DeleteButton>
        </ReviewActions>
      </ReviewHeader>
      <ReviewText>{review.review}</ReviewText>

      {showDeleteConfirm && (
        <ConfirmationSection>
          <ConfirmationText>
            Are you sure you want to delete this review?
          </ConfirmationText>
          <ConfirmationButtons>
            <ConfirmCancelButton onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </ConfirmCancelButton>
            <ConfirmDeleteButton
              onClick={handleDeleteConfirm}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </ConfirmDeleteButton>
          </ConfirmationButtons>
        </ConfirmationSection>
      )}
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

const DeleteButton = styled.button`
  background: none;
  border: 1px solid #ef4444;
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  color: #ef4444;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #dc2626;
    color: white;
    background-color: #ef4444;
  }
`;

const ConfirmationSection = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
`;

const ConfirmationText = styled.p`
  margin: 0 0 1rem 0;
  font-size: 0.875rem;
  color: #991b1b;
  line-height: 1.4;
`;

const ConfirmationButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ConfirmCancelButton = styled.button`
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }
`;

const ConfirmDeleteButton = styled.button`
  padding: 0.5rem 1rem;
  background: #ef4444;
  border: 1px solid #ef4444;
  border-radius: 4px;
  font-size: 0.875rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #dc2626;
    border-color: #dc2626;
  }
`;

export default ReviewCard;
