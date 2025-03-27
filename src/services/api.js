import axios from "axios";

const API_KEY = "3e684dd";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query, type = "", page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        type: type,
        page: page,
        apikey: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Response: "False", Error: "Failed to fetch movies" };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { i: id, apikey: API_KEY },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return { Response: "False", Error: "Failed to fetch movie details" };
  }
};
