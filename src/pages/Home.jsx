import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { fetchMovies } from "../services/api";

const Home = () => {
  const [query, setQuery] = useState("Avengers");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchMovies(query, type, page);

        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalPages(Math.ceil(data.totalResults / 10));
        } else {
          setMovies([]);
          setError(data.Error || "No results found.");
        }
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, type, page]);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-2 w-full text-black rounded"
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="p-2 text-black rounded"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>

      {loading && <p className="text-center text-lg">Loading movies...</p>}

      {error && !loading && (
        <p className="text-center text-red-500 text-lg">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <p className="text-center text-gray-400">No results found.</p>
          )}
        </div>
      )}

      {!loading && !error && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default Home;
