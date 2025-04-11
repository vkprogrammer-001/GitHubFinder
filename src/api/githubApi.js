const BASE_URL = process.env.REACT_APP_GITHUB_API;

/**
 * Search for GitHub users.
 * @param {string} query - Search query for GitHub users.
 * @param {number} page - Page number for pagination.
 * @param {number} perPage - Number of results per page.
 * @returns {Promise<Object>} - User search results or error.
 */
export const searchUsers = async (query, page = 1, perPage = 30) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/users?q=${query}&page=${page}&per_page=${perPage}`
    );
    if (!response.ok) {
      throw new Error(`Error searching users: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in searchUsers:", error);
    throw error;
  }
};

/**
 * Fetch GitHub user details.
 * @param {string} username - GitHub username to fetch details for.
 * @returns {Promise<Object>} - User details or error.
 */
export const fetchUserDetails = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error(`Error fetching user details: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchUserDetails:", error);
    throw error;
  }
};

/**
 * Fetch repositories of a GitHub user.
 * @param {string} username - GitHub username.
 * @param {number} page - Page number for pagination.
 * @param {number} perPage - Number of results per page.
 * @returns {Promise<Array>} - List of repositories or error.
 */
export const fetchUserRepositories = async (username, page = 1, perPage = 5) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/${username}/repos?page=${page}&per_page=${perPage}&sort=updated`
    );
    if (!response.ok) {
      throw new Error(`Error fetching repositories: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in fetchUserRepositories:", error);
    throw error;
  }
};

// For backward compatibility with existing code
export const fetchUsers = async (username) => {
  return fetchUserDetails(username);
};

/**
 * Fetch GitHub user details.
 * @returns {Promise<Object>} - Example user details or error.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await fetch(`${username}`);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in fetchUser:", error);
    throw error;
  }
};


