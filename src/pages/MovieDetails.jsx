import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovie();
  }, [id]);

  if (!movie) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div
      className="relative mt-[-10px] w-full min-h-screen bg-cover opacity-90 bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${movie.Poster})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      <div className="absolute bottom-10 left-10 w-11/12 md:w-2/3 lg:w-1/2 p-6">
        <h1 className="text-4xl font-bold">
          {movie.Title}{" "}
          <span className="text-gray-300 text-xl">({movie.Year})</span>
        </h1>
        <p className="text-gray-400 mt-2">{movie.Actors}</p>
        <p className="mt-4">{movie.Plot}</p>

        <div className="flex items-center space-x-6 mt-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="font-bold">{movie.Runtime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold">{movie.imdbRating} ⭐</span>
          </div>
          <div className="px-2 py-1 bg-gray-700 text-sm rounded-md">
            {movie.Rated}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
