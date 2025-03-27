import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const updateFavoriteCount = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavoriteCount(favorites.length);
    };

    updateFavoriteCount();
    window.addEventListener("storage", updateFavoriteCount);

    return () => window.removeEventListener("storage", updateFavoriteCount);
  }, []);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg md:text-2xl">
        🎬 Movie Search
      </Link>

      <div className="flex gap-4 text-sm md:text-base">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link
          to="/favorites"
          className="hover:text-gray-400 flex items-center gap-1"
        >
          Favorites ❤️
          <span className="bg-red-500 px-2 py-1 rounded-full text-xs md:text-sm">
            {favoriteCount}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
