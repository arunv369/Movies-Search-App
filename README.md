🎬 Movie Search App
A React-based movie search application that integrates with the OMDb API to allow users to search for movies, view detailed information, and manage a list of favorites.

🚀 Features

✅ Search Movies - Users can search for movies using keywords
✅ Movie Details Page - View in-depth details, including ratings, cast, and plot
✅ Filter by Type - Search specifically for Movies, Series, or Episodes using an API filter
✅ Pagination - Supports navigation through multiple pages of results
✅ Favorites List - Save favorite movies for later viewing
✅ Error Handling - Handles API errors and displays user-friendly messages
✅ Responsive Design - Mobile-friendly UI using Tailwind CSS
✅ React Router Integration - Enables seamless navigation between pages

🛠 Tech Stack:

1️⃣ Frontend: React, JavaScript, React Router
2️⃣ Styling: Tailwind CSS
3️⃣ State Management: useState, useEffect
API Integration: OMDb API (REST API)

🏗 Project Structure

📂 movie-search-app
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ 📜 MovieCard.jsx
┃ ┃ ┣ 📜 Navbar.jsx
┃ ┃ ┣ 📜 Pagination.jsx
┃ ┣ 📂 pages
┃ ┃ ┣ 📜 Home.jsx
┃ ┃ ┣ 📜 MovieDetails.jsx
┃ ┃ ┣ 📜 Favorites.jsx
┃ ┣ 📂 services
┃ ┃ ┣ 📜 api.js
┃ ┣ 📜 App.js
┃ ┣ 📜 index.js
┣ 📜 .env
┣ 📜 .gitignore
┣ 📜 package.json
┣ 📜 README.md

📌 Usage
1️⃣ Search for a movie by entering a title in the search bar
2️⃣ Filter results using the type dropdown (Movie, Series, Episode)
3️⃣ View detailed movie info by clicking on a movie
4️⃣ Add to Favorites and manage your favorite list
5️⃣ Navigate pages using pagination

🛠 Error Handling

1️⃣ Displays "No results found" if no movies match the query
2️⃣ Shows "Failed to fetch movies" if the API request fails
3️⃣ Ensures a smooth user experience by preventing app crashes

🌐 API Reference

Base URL: https://www.omdbapi.com/

Search Movies:
GET https://www.omdbapi.com/?s={query}&type={type}&page={page}&apikey={API_KEY}

Movie Details:
GET https://www.omdbapi.com/?i={imdbID}&apikey={API_KEY}
