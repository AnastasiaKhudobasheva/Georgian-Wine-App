import styled from "styled-components";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const WishlistButton = ({ wineId, onWishlistChange }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(true);

  // check if wine is already in wishlist when component loads
  useEffect(() => {
    const checkWishlistStatus = async () => {
      try {
        const response = await fetch(`/api/wishlist/check/${wineId}`);
        const data = await response.json();
        setIsInWishlist(data.isInWishlist);
      } catch (error) {
        console.log("Error checking wishlist status:", error);
      } finally {
        setIsCheckingStatus(false);
      }
    };

    if (wineId) {
      checkWishlistStatus();
    }
  }, [wineId]);

  const handleToggle = async () => {
    setIsLoading(true);

    try {
      if (isInWishlist) {
        const response = await fetch(`/api/wishlist/${wineId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setIsInWishlist(false);
          toast.success("Removed from wishlist! 💔");
          onWishlistChange?.(); // TELL PARENT TO REFRESH
        } else {
          toast.error("Failed to remove from wishlist");
        }
      } else {
        const response = await fetch(`/api/wishlist/${wineId}`, {
          method: "POST",
        });

        if (response.ok) {
          setIsInWishlist(true);
          toast.success("Added to wishlist! ❤️");
          onWishlistChange?.(); // TELL PARENT TO REFRESH
        } else {
          toast.error("Failed to add to wishlist");
        }
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isCheckingStatus) {
    return (
      <HeartButton disabled>
        <Heart size={20} color="#d1d5db" />
      </HeartButton>
    );
  }

  return (
    <HeartButton
      onClick={handleToggle}
      disabled={isLoading}
      $isInWishlist={isInWishlist}
    >
      <Heart
        size={20}
        fill={isInWishlist ? "#944710" : "none"}
        color={isInWishlist ? "#944710" : "#944710"}
      />
    </HeartButton>
  );
};

const HeartButton = styled.button`
  background: white;
  border: 1px solid ${(props) => (props.$isInWishlist ? "#944710" : "#944710")};
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: #7a3a0d;
    background-color: #f7f3f0;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default WishlistButton;
