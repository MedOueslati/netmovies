import React from "react";
import StarRatingComponent from "react-star-rating-component";

// Functional component for displaying a movie card with a star rating
const MovieCard = ({ movie }) => {
  return (
    <>
      {/* StarRatingComponent to display the movie's rating */}
      <StarRatingComponent
        name="rate1" // Unique identifier for the star rating component
        starCount={5} // Number of stars in the rating component
        value={movie.rate} // The current rating value based on the movie's data
      />
    </>
  );
};

export default MovieCard;