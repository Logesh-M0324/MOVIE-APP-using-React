import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { motion } from "framer-motion";
import { useState } from "react";
import emptyStateImg from "../assets/empty-state.png";

function FavouritePage() {
  const { favorites, setFavorites } = useMovieContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState("#ffcc00");

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleSortOrder = () => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  const clearFavorites = () => setFavorites([]);

  // Filter by search
  const filteredFavorites = favorites?.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedFavorites = filteredFavorites?.sort((a, b) => 
    sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );

  const shareFavorites = () => {
    const shareText = `Check out my favorite movies! ${window.location.href}`;
    navigator.clipboard.writeText(shareText);
    alert("Favorites link copied to clipboard!");
  };

  return (
    <motion.div 
      className={`favorites stylish-background ${darkMode ? "dark-mode" : ""}`}
      style={{ "--theme-color": themeColor, height: "100vh", width: "100vw", margin: 0, padding: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="top-controls">
        <h2 className="glowing-text pulsing-text">
          YOUR FAVOURITES <span className="favorite-count">({favorites.length})</span>
        </h2>
        <div className="toggle-controls">
          <button className="toggle-button" onClick={toggleSortOrder}>
            Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
          </button>
          <button className="clear-button" onClick={clearFavorites}>
            Clear All
          </button>
        </div>
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search favorites..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {sortedFavorites.length > 0 ? (
        <motion.div 
          className="movies-grid fancy-grid animated-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {sortedFavorites.map((movie) => (
            <motion.div 
              key={movie.id} 
              whileHover={{ scale: 1.1, boxShadow: "0px 4px 20px rgba(255, 215, 0, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="movie-card-wrapper neon-border animated-card"
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="favorites-empty animated-glass floating-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src={emptyStateImg} 
            alt="No favorites yet" 
            className="empty-image centered-image glowing-image floating-image"
          />
          <h2 className="pulsing-text neon-text">No Favorite Movies Yet</h2>
          <p className="shimmer-text">Start adding movies to your favorites!</p>
          <button className="share-button" onClick={shareFavorites}>Share Your Favorites</button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default FavouritePage;
