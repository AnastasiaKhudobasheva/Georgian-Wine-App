import styled from "styled-components";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import useSWR from "swr";

const WishlistButton = ({ wineId }) => {
  // ALL wishlist data with SWR
  const { data: wishlist = [], isLoading, mutate } = useSWR("/api/wishlist");

  // check if wine is in the list
  const isInWishlist = wishlist?.some((item) => item._id === wineId);

  const handleToggle = async () => {
    // optimistic UI update (instant feedback)
    const updatedWishlist = isInWishlist
      ? wishlist.filter((item) => item._id !== wineId) // Remove wine
      : [...wishlist, { _id: wineId }]; // Add fake wine entry

    mutate(updatedWishlist, false); // update UI instantly, no revalidation

    try {
      if (isInWishlist) {
        const response = await fetch(`/api/wishlist/${wineId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast.success("Removed from wishlist! 💔");
          mutate();
        } else {
          toast.error("Failed to remove from wishlist");
        }
      } else {
        const response = await fetch(`/api/wishlist/${wineId}`, {
          method: "POST",
        });

        if (response.ok) {
          toast.success("Added to wishlist! ❤️");
          mutate();
        } else {
          mutate(wishlist, false); // rollback to original state if fetching fails bc we already performed optimistic update
          toast.error("Failed to add to wishlist");
        }
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <HeartButton
      onClick={handleToggle}
      disabled={isLoading}
      $isInWishlist={isInWishlist}
    >
      <Heart
        size={20}
        fill={isInWishlist ? "#944710" : "none"}
        color="#944710"
      />
    </HeartButton>
  );
};

const HeartButton = styled.button`
  font-family: "League Spartan", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
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
