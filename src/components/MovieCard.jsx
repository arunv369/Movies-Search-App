import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onRemove, isFavoritePage = false }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some((fav) => fav.imdbID === movie.imdbID));
  }, [movie.imdbID]);

  const toggleFavorite = () => {
    let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      storedFavorites = storedFavorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
      if (onRemove) onRemove(movie.imdbID);
    } else {
      storedFavorites.push(movie);
    }

    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    setIsFavorite(!isFavorite);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:scale-105 transition flex flex-col h-full">
      <Link to={`/movie/${movie.imdbID}`} className="flex-1">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-60 object-cover rounded-md"
        />
        <h3 className="mt-2 text-lg font-semibold">{movie.Title}</h3>
        <p className="text-gray-400">{movie.Year}</p>
      </Link>

      <div className="mt-auto flex justify-center">
        {isFavoritePage ? (
          <button
            className="mt-4 w-full px-4 py-2 bg-red-500 rounded-md"
            onClick={toggleFavorite}
          >
            Remove ❤️
          </button>
        ) : (
          <button
            className={`mt-4 w-full px-4 py-2 rounded-md ${
              isFavorite ? "bg-red-500" : "bg-gray-600"
            }`}
            onClick={toggleFavorite}
          >
            {isFavorite ? "Remove ❤️" : "Add to Favorites 🤍"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
