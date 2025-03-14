import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onSearch(newValue); // Call the onSearch function passed from App, passing the new value
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find GitHub Accounts Effortlessly!"
        value={inputValue}
        onChange={handleChange}
      />
      <button>
        <img
          src="/assets/magnify.png"
          alt="magnifyglass"
          width={28}
          height={28}
        />
      </button>
    </div>
  );
};

export default SearchBar;
