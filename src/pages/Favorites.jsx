import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter(
      (movie) => movie.imdbID !== movieId
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">❤️ Favorites</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onRemove={removeFavorite}
              isFavoritePage={true}
            />
          ))
        ) : (
          <div>
            <p>No favorites yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
