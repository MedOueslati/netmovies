import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesList from "./components/MoviesList";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import AddMovie from "./components/AddMovie";

// Main App component
const App = () => {
  // State to manage the search input text
  const [keysearch, setKeysearch] = useState("");

  // State to manage the minimum rating for filtering movies
  const [rating, setRating] = useState(1);

  // State to manage the list of movies
  const [movies, setMovies] = useState([
    // Initial list of movies
    {
      title: "Shanty Town",
      year: "2023",
      type: "Series",
      description: "A description of Shanty Town...",
      trailer: "https://www.youtube.com/embed/your-trailer-id",
      rate: "2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjEyNjVkMmEtZWFmYy00MDE5LThmZTUtYmE4N2Q5MDRkMmE4XkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_SX300.jpg",
    },
    // ... more movie objects ...
  ]);

  // Function to update the search text
  const search = (text) => {
    setKeysearch(text);
  };

  // Function to update the minimum rating for filtering
  const setRate = (rate) => {
    setRating(rate);
  };

  // Function to add a new movie to the list
  const addMovie = (newMovie) => {
    setMovies((Movies) => [...Movies, newMovie]);
  };

  // Rendered JSX
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Add Movie Component */}
      <AddMovie addMovie={addMovie} />

      {/* Search Component */}
      <Search search={search} setRate={setRate} />

      {/* Movies List Component */}
      <MoviesList
        movies={movies.filter(
          (el) =>
            el.rate >= rating &&
            el.title.toLowerCase().includes(keysearch.toLowerCase())
        )}
      />
    </>
  );
};

export default App;
