import React, { useState } from "react";
// import { fetchUser } from "../api/githubApi.js";
import "../styles/component-styles.css";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";

const SearchResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // To handle errors explicitly

  const handleSearch = async (query) => {
    setSearchTerm(query); // Update searchTerm state

    
    setError(null);
  };

  return (
    <div className="search-page-header">
      <div className="search-page-content">
        <h1
          style={{
            fontFamily: "Inknut Antiqua",
            fontSize: "95px",
            fontWeight: "500",
          }}
        >
          GitHub Finder
        </h1>
        <h4
          style={{
            fontFamily: "Inria Serif",
            fontSize: "20px",
            fontWeight: "normal",
          }}
        >
          Find GitHub Accounts Effortlessly!
        </h4>
        <SearchBar onSearch={handleSearch} />
      </div>
      {error && <p className="error-message">Error: {error}</p>}
      {/* {loading && <p>Loading users...</p>}  */}
      <UserList searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
