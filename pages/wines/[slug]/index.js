import { useRouter } from "next/router";
import useSWR from "swr";
import WineDetails from "@/components/wine/WineDetails";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";
import ReviewList from "@/components/reviews/ReviewList";
import ReviewForm from "@/components/reviews/ReviewForm";

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

  return (
    <>
      <WineDetails wine={wine} />
      <ReviewList wineId={wine._id} />
    </>
  );
}
