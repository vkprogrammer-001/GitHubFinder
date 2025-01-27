import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchUser, fetchUserRepositories } from "../api/githubApi.js";

const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("user");

  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username) {
      // Fetch user data
      fetchUser(username)
        .then((data) => setUserData(data))
        .catch((err) => setError(err.message));

      // Fetch user repositories
      fetchUserRepositories(username)
        .then((data) => setRepos(data))
        .catch((err) => setError(err.message));
    }
  }, [username]);

  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  return (
    <div>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
        </div>
      )}
      {repos.length > 0 && (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResultsPage;
