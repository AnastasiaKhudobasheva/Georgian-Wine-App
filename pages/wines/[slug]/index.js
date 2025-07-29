import { useRouter } from "next/router";
import useSWR from "swr";
import WineDetails from "@/components/wine/WineDetails";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";
import ReviewCard from "@/components/reviews/ReviewCard";

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

  const testReview = {
    name: "Nino",
    review:
      "Absolutely loved this fizzy gem! So alive and fun, perfect for brunch.",
    createdAt: "2025-07-10T10:15:00Z",
  };

  return (
    <>
      <WineDetails wine={wine} />
      <ReviewCard review={testReview} />
    </>
  );
}
