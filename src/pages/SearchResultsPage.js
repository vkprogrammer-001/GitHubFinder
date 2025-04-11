import React, { useContext, useState } from "react";
// import { fetchUser } from "../api/githubApi.js";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";
import UserList from "../components/UserList";
import ThemeContext from "../context/ThemeContext";
import "../styles/component-styles.css";
import "../styles/theme.css";

const SearchResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // To handle errors explicitly
  const { darkMode } = useContext(ThemeContext);

  const handleSearch = async (query) => {
    setSearchTerm(query); // Update searchTerm state

    setError(null);
  };

  return (
    <div className={`search-page ${darkMode ? "dark-mode" : ""}`}>
      <div className={`search-page-header ${darkMode ? "dark-mode" : ""}`}>
        <div className="home-button-container">
          <Link to="/" className="home-button">
            &#8592; Home
          </Link>
        </div>
        
        <div className="theme-toggle-container-search">
          <ThemeToggle />
        </div>
        
        <div className="search-page-content">
          <h1
            style={{
              fontFamily: "Inknut Antiqua",
              fontSize: "95px",
              fontWeight: "500",
              color: "var(--text-primary)",
            }}
          >
            GitHub Finder
          </h1>
          <h4
            style={{
              fontFamily: "Inria Serif",
              fontSize: "20px",
              fontWeight: "normal",
              color: "var(--text-secondary)",
              marginBottom: "30px",
            }}
          >
            Find GitHub Accounts Effortlessly!
          </h4>
          <SearchBar onSearch={handleSearch} />
        </div>
        {error && <p className="error-message">Error: {error}</p>}
        {/* {loading && <p>Loading users...</p>}  */}
        <UserList searchTerm={searchTerm} />
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
