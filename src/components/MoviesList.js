import React from "react";
import StarRatingComponent from "react-star-rating-component";

// Functional component for displaying a list of movies
const MovieList = ({ movies }) => {
  return (
    <div className="container">
      <div className="row">
        {/* Map through the movies array and render a card for each movie */}
        {movies.map((movie, index) => (
          <div key={index} className="col-md-3 mt-4">
            <div className="card">
              {/* Movie poster image */}
              <img
                src={movie.poster}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                {/* Movie title */}
                <h5 className="card-title">{movie.title}</h5>

                {/* Movie year */}
                <p className="card-text">Year: {movie.year}</p>

                {/* StarRatingComponent to display the movie's rating */}
                <StarRatingComponent
                  name="rate1" // Unique identifier for the star rating component
                  starCount={5} // Number of stars in the rating component
                  value={movie.rate} // The current rating value based on the movie's data
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
