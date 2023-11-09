import React from "react";
import StarRatingComponent from "react-star-rating-component";

// Functional component for the search box with rating filter
const Search = ({ search, setRate, rating }) => {
  // Handler for star rating click
  const onStarClick = (nextValue) => {
    setRate(nextValue);
  };

  return (
    <div className="search-box">
      {/* Input for movie search */}
      <input
        type="text"
        placeholder="search a movie"
        onChange={(e) => search(e.target.value)}
      />

      {/* StarRatingComponent for rating filter */}
      <div>
        <StarRatingComponent
          name="rate1" // Unique identifier for the star rating component
          starCount={5} // Number of stars in the rating component
          value={rating} // The current rating value based on the filter
          onStarClick={onStarClick} // Event handler for star click
        />
      </div>
      {/* Additional empty div */}
      <div></div>
    </div>
  );
};

export default Search;
