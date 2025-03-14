const BASE_URL = process.env.REACT_APP_GITHUB_API;

/**
 * Fetch GitHub user details.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<Object>} - User details or error.
 */
export const fetchUsers = async (username) => {
  try {
    // const user = username ? `?q=${username}` : "";
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Error in fetchUser:", error);
    throw error;
  }
};

/**
 * Fetch repositories of a GitHub user.
 * @param {string} username - GitHub username.
 * @returns {Promise<Array>} - List of repositories or error.
 */
export const fetchUserRepositories = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    if (!response.ok) {
      throw new Error(`Error fetching repositories: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in fetchUserRepositories:", error);
    throw error;
  }
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


