const BASE_URL = "https://api.github.com";

/**
 * Fetch GitHub user details.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<Object>} - User details or error.
 */
export const fetchUser = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }
    return await response.json();
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
