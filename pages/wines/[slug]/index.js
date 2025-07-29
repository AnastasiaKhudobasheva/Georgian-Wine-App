import { useRouter } from "next/router";
import useSWR from "swr";
import WineDetails from "@/components/wine/WineDetails";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";
import ReviewList from "@/components/reviews/ReviewList";

export default function WineDetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { slug } = router.query;

  const {
    data: wine,
    isLoading,
    error,
  } = useSWR(isReady ? `/api/wines/${slug}` : null);

  // Loading state: spinner
  if (!isReady || isLoading) {
    return <Loading message="Loading wine details..." />;
  }

  // Error state: 404 page
  if (error || !wine) {
    return <ErrorMessage />;
  }

  const testReviews = [
    {
      _id: "1",
      name: "Nino",
      review:
        "Absolutely loved this fizzy gem! So alive and fun, perfect for brunch.",
      createdAt: "2025-07-10T10:15:00Z",
    },
    {
      _id: "2",
      name: "Marcus",
      review:
        "Great energy, slight funk, but that's Pet-Nat life. Would drink again.",
      createdAt: "2025-07-09T14:20:00Z",
    },
    {
      _id: "3",
      name: "Anna",
      review: "Really crisp and nutty. Lovely acidity and structure!",
      createdAt: "2025-07-08T16:30:00Z",
    },
  ];

  return (
    <>
      <WineDetails wine={wine} />
      <ReviewList reviews={[]} />
    </>
  );
}
