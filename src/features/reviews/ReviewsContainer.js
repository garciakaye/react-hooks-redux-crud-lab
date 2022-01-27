import React from "react";
import { useSelector } from "react-redux";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

// This component should be nested within the restaurant component
// so reviews are displayed underneath the restaurant they belong to

function ReviewsContainer({ restaurantId }) {
  const reviews = useSelector((state) =>
    state.reviews.entities.filter((r) => r.restaurantId === restaurantId)
  );

  return (
    <div>
      <ReviewInput restaurantId={restaurantId} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsContainer;
