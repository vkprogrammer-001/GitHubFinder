import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { fetchUserDetails, searchUsers } from "../api/githubApi";
import ThemeContext from "../context/ThemeContext";
import "../styles/theme.css";
import UserCard from "./UserCard";

const UserList = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { darkMode } = useContext(ThemeContext);
  const observer = useRef();

  // Function to load user details
  const loadUserDetails = async (username) => {
    try {
      return await fetchUserDetails(username);
    } catch (error) {
      console.error(`Error fetching details for ${username}:`, error);
      return null;
    }
  };

  // Function to search users
  const loadUsers = useCallback(async () => {
    if (!searchTerm || loading) return;
    
    try {
      setLoading(true);
      setError(null);
      
      // Search for users based on the search term
      const searchResults = await searchUsers(searchTerm, page, 6);
      
      // Load detailed information for each user
      const userPromises = searchResults.items.map(user => 
        loadUserDetails(user.login)
      );
      
      const userDetails = await Promise.all(userPromises);
      const validUsers = userDetails.filter(user => user !== null);
      
      setUsers(prevUsers => 
        page === 1 ? validUsers : [...prevUsers, ...validUsers]
      );
      
      setHasMore(searchResults.items.length > 0 && page * 6 < searchResults.total_count);
      setLoading(false);
    } catch (error) {
      console.error("Error in search:", error);
      setError(error.message);
      setLoading(false);
    }
  }, [searchTerm, page, loading]);

  // Load users when search term or page changes
  useEffect(() => {
    if (searchTerm) {
      loadUsers();
    }
  }, [searchTerm, page, loadUsers]);

  // Reset page when search term changes
  useEffect(() => {
    setPage(1);
    setUsers([]);
    setHasMore(true);
  }, [searchTerm]);

  // Intersection observer for infinite scrolling
  const lastUserElementRef = useCallback(node => {
    if (loading) return;
    
    if (observer.current) {
      observer.current.disconnect();
    }
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    
    if (node) {
      observer.current.observe(node);
    }
  }, [loading, hasMore]);

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className={`search-results-list ${darkMode ? 'dark-mode' : ''}`}>
      {users.length > 0 ? (
        <div className="user-grid">
          {users.map((user, index) => {
            if (users.length === index + 1) {
              return (
                <div ref={lastUserElementRef} key={user.id}>
                  <UserCard user={user} />
                </div>
              );
            } else {
              return <UserCard key={user.id} user={user} />;
            }
          })}
        </div>
      ) : (
        <p id="Empty" className={darkMode ? 'dark-mode' : ''}>
          {searchTerm ? 'Searching...' : 'Find a GitHub Account'}
        </p>
      )}
      {loading && <div className="loading">Loading more users...</div>}
    </div>
  );
};

export default UserList;