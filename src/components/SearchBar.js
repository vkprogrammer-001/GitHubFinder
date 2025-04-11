import React, { useCallback, useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/theme.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const { darkMode } = useContext(ThemeContext);
  
  // Debounce search to avoid too many API calls
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      onSearch(searchTerm);
    }, 500),
    [onSearch]
  );
  
  // Handle input change
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    debouncedSearch(newValue);
  };
  
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`search-input ${darkMode ? 'dark-mode' : ''}`}
        placeholder="Find GitHub Accounts Effortlessly!"
        value={inputValue}
        onChange={handleChange}
        aria-label="Search GitHub users"
      />
    </form>
  );
};

// Debounce function to limit API calls
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default SearchBar;
