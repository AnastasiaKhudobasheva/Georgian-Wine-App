import styled from "styled-components";
import { useState } from "react";

const ReviewForm = ({ wineId, onSuccess, onCancel }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!name.trim() || !review.trim()) {
      alert("Please fill in all fields");
      return;
    }

    if (review.length > 500) {
      alert("Review must be 500 characters or less");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wineId,
          name: name.trim(),
          review: review.trim(),
        }),
      });

      if (response.ok) {
        setName("");
        setReview("");
        onSuccess();
      } else {
        alert("Failed to submit review");
      }
    } catch (error) {
      alert("Error submitting review");
    }

    setIsSubmitting(false);
  };

  return (
    <FormContainer>
      <FormTitle>Your Review</FormTitle>

      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your thoughts about this wine..."
            rows={4}
            maxLength={500}
          />
          <CharacterCounter>{review.length} / 500</CharacterCounter>
        </InputGroup>

        <ButtonGroup>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 970px; /* MATCH WineDetails Container */
  margin: 2rem auto 4rem auto; /* CENTER like WineDetails */
  padding: 2rem 1rem; /* SAME padding as WineDetails */
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1.5rem 0;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: #944710;
      box-shadow: 0 0 0 3px rgba(148, 71, 16, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const CharacterCounter = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  text-align: right;
  margin-top: 0.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  button[type="button"] {
    background: white;
    border: 1px solid #d1d5db;
    color: #374151;

    &:hover:not(:disabled) {
      background: #f9fafb;
      border-color: #9ca3af;
    }
  }

  button[type="submit"] {
    background: #944710;
    border: 1px solid #944710;
    color: white;

    &:hover:not(:disabled) {
      background: #7a3a0d;
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(148, 71, 16, 0.3);
    }
  }
`;

export default ReviewForm;
